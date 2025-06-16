import sqlite3
import tkinter as tk
import tkinter.font as tkFont
import ttkbootstrap as ttk
from ttkbootstrap.constants import *
import json
import re
import webbrowser
import os
import sys
import shutil

def resource_path(relative_path):
    """兼容 PyInstaller 和源码运行"""
    if hasattr(sys, '_MEIPASS'):
        return os.path.join(sys._MEIPASS, relative_path)
    return relative_path

def extract_resource(filename):
    dst_path = os.path.join(os.getcwd(), filename)
    if not os.path.exists(dst_path):
        try:
            shutil.copyfile(resource_path(filename), dst_path)
            print(f"已释放: {filename}")
        except Exception as e:
            print(f"释放 {filename} 失败: {e}")

# 释放 config.json 和 questions.db
extract_resource("config.json")
extract_resource("questions.db")

# 读取配置
with open("config.json", encoding="utf-8") as f:
    config = json.load(f)

FUZZY_KEYWORDS = config["fuzzy_keywords"]
TRICKY_WORDS = config["tricky_words"]
FONT_CONF = config.get("font", {"family": "Microsoft YaHei", "size": 11})

# 字体
font_10 = font_11 = font_11_bold = font_12 = None

def update_fonts():
    global font_10, font_11, font_11_bold, font_12
    family = FONT_CONF.get("family", "Microsoft YaHei")
    size = FONT_CONF.get("size", 11)
    font_10 = tkFont.Font(family=family, size=10)
    font_11 = tkFont.Font(family=family, size=size)
    font_11_bold = tkFont.Font(family=family, size=size, weight="bold")
    font_12 = tkFont.Font(family=family, size=12)

# 数据库连接
conn = sqlite3.connect("questions.db")
cursor = conn.cursor()

def normalize_query(query):
    q = query.lower()
    for k, v in FUZZY_KEYWORDS.items():
        if k in q:
            q = q.replace(k, v)
    return q

def search(event=None):
    query = entry.get().strip()
    result_list.delete(0, tk.END)
    normalized = normalize_query(query)

    cursor.execute(
        "SELECT question FROM questions WHERE LOWER(question) LIKE ? GROUP BY question",
        (f"%{normalized}%",)
    )
    results = cursor.fetchall()
    result_count_label.config(text=f"共找到 {len(results)} 条结果")
    for idx, row in enumerate(results, 1):
        result_list.insert(tk.END, f"{idx}. {row[0]}")

def highlight_keywords(text_widget, full_text, keyword, tag_name, fg_color="#dc3545"):
    text_widget.tag_remove(tag_name, "1.0", tk.END)
    for match in re.finditer(re.escape(keyword), full_text, re.IGNORECASE):
        start = f"1.0+{match.start()}c"
        end = f"1.0+{match.end()}c"
        text_widget.tag_add(tag_name, start, end)
    text_widget.tag_config(tag_name, foreground=fg_color, font=font_11_bold)

def show_answer(event):
    selection = result_list.curselection()
    if not selection:
        return
    idx = selection[0]
    display_text = result_list.get(idx)
    question_text = re.sub(r"^\d+\.\s*", "", display_text)

    # 获取所有该题干的选项（包括重复题目）
    cursor.execute("SELECT option, is_correct FROM questions WHERE question = ?", (question_text,))
    raw_options = cursor.fetchall()

    # 去重处理选项
    seen_options = set()
    options = []
    for opt, correct in raw_options:
        key = (opt.strip(), correct.strip())
        if key not in seen_options:
            seen_options.add(key)
            options.append((opt, correct))

    text_area.delete(1.0, tk.END)
    text_area.insert(tk.END, question_text + "\n\n")

    for tricky in TRICKY_WORDS:
        if tricky in question_text:
            highlight_keywords(text_area, question_text, tricky, "tricky", fg_color="#ffc107")

    for opt, correct in options:
        mark = "✔ " if correct == "true" else "✘ "
        style = "success" if correct == "true" else "secondary"
        text_area.insert(tk.END, f"{mark} {opt}\n", style)

    for word in entry.get().strip().split():
        expanded = FUZZY_KEYWORDS.get(word.lower(), word)
        highlight_keywords(text_area, text_area.get("1.0", tk.END), expanded, f"search_keyword_{word}", fg_color="#0d6efd")

def open_github():
    webbrowser.open("https://github.com/YuleBest")

# ------------ GUI 构建 ------------

# -- 首页 --
root = ttk.Window(themename="flatly")
root.title("小米BL解锁题库查询工具")
root.geometry("900x650")
root.minsize(700, 500)
root.iconbitmap(resource_path("icon.ico"))
update_fonts()

style = ttk.Style()
style.configure("TButton", font=font_11)
style.configure("TEntry", font=font_11)
style.configure("TLabel", font=font_10)
style.configure("TNotebook.Tab", font=font_10)

notebook = ttk.Notebook(root)
notebook.pack(fill=tk.BOTH, expand=True)

tab_quiz = ttk.Frame(notebook)
notebook.add(tab_quiz, text="题库查询")

frame_top = ttk.Frame(tab_quiz, padding=10)
frame_top.pack(fill=tk.X)

entry = ttk.Entry(frame_top, width=50)
entry.pack(side=tk.LEFT, padx=5, fill=tk.X, expand=True)

search_after_id = None
def on_key_release(event):
    global search_after_id
    if search_after_id:
        root.after_cancel(search_after_id)
    search_after_id = root.after(200, search)

entry.bind("<Return>", search)
entry.bind("<KeyRelease>", on_key_release)

ttk.Button(frame_top, text="🔍 搜索", command=search, bootstyle="primary").pack(side=tk.LEFT)

result_count_label = ttk.Label(tab_quiz, text="共找到 0 条结果")
result_count_label.pack(anchor="w", padx=15, pady=(5, 0))

paned = ttk.Panedwindow(tab_quiz, orient=tk.VERTICAL)
paned.pack(fill=tk.BOTH, expand=True, padx=10, pady=5)

frame_mid = ttk.Frame(paned)
result_scroll_x = tk.Scrollbar(frame_mid, orient=tk.HORIZONTAL)
result_scroll_y = tk.Scrollbar(frame_mid, orient=tk.VERTICAL)
result_list = tk.Listbox(frame_mid, height=10, font=font_11,
                         xscrollcommand=result_scroll_x.set,
                         yscrollcommand=result_scroll_y.set,
                         exportselection=False)
result_scroll_x.config(command=result_list.xview)
result_scroll_y.config(command=result_list.yview)
result_list.grid(row=0, column=0, sticky="nsew")
result_scroll_y.grid(row=0, column=1, sticky="ns")
result_scroll_x.grid(row=1, column=0, sticky="ew")
frame_mid.rowconfigure(0, weight=1)
frame_mid.columnconfigure(0, weight=1)
paned.add(frame_mid, weight=1)

frame_bottom = ttk.Frame(paned)
text_scroll_x = tk.Scrollbar(frame_bottom, orient=tk.HORIZONTAL)
text_scroll_y = tk.Scrollbar(frame_bottom, orient=tk.VERTICAL)
text_area = tk.Text(frame_bottom, height=10, font=font_11,
                    wrap="none",
                    xscrollcommand=text_scroll_x.set,
                    yscrollcommand=text_scroll_y.set)
text_scroll_x.config(command=text_area.xview)
text_scroll_y.config(command=text_area.yview)
text_area.grid(row=0, column=0, sticky="nsew")
text_scroll_y.grid(row=0, column=1, sticky="ns")
text_scroll_x.grid(row=1, column=0, sticky="ew")
frame_bottom.rowconfigure(0, weight=1)
frame_bottom.columnconfigure(0, weight=1)
paned.add(frame_bottom, weight=2)

text_area.tag_config("success", foreground="#198754", font=font_11_bold)
text_area.tag_config("secondary", foreground="#6c757d")
text_area.tag_config("keyword", foreground="#0d6efd", font=font_11_bold)
text_area.tag_config("tricky", foreground="#ffc107", background="#212529", font=font_11_bold)


# -- 问 AI --
tab_about = ttk.Frame(notebook)
notebook.add(tab_about, text="问AI")
about_label = ttk.Label(tab_about, text="正在开发中，敬请期待", font=font_12)
about_label.pack(pady=20)

# -- 关于 --
tab_about = ttk.Frame(notebook)
notebook.add(tab_about, text="关于")
author_frame = ttk.LabelFrame(tab_about, text="作者信息", padding=10)
author_frame.pack(fill="x", padx=20, pady=(20, 10))

author_label = ttk.Label(
    author_frame,
    text="作者：于乐\n版本：1.1",
    font=font_12,
    justify="center",
    anchor="center"
)
author_label.pack()

ttk.Button(
    author_frame,
    text="打开 GitHub",
    command=open_github,
    bootstyle="info"
).pack(pady=(10, 0))

changelog_frame = ttk.LabelFrame(tab_about, text="更新日志", padding=10)
changelog_frame.pack(fill="both", expand=True, padx=20, pady=(10, 20))

changelog_text = """\
# v1.1:
- 优化界面布局
- 增加「关于 - 更新日志」显示区域
- 增加「问AI」占位页
- 把搜索事件的防抖从 500ms 优化至 200ms，搜索体验更佳
- 优化图标展示
- 暂时移除字体大小调整，将字体调整改为下拉框样式

# v1.0:
- 初始版本发布
"""
log_label = ttk.Label(
    changelog_frame,
    text=changelog_text,
    font=font_10,
    justify="left",
    anchor="w"
)
log_label.pack(fill="x")

# -- 设置 --
tab_settings = ttk.Frame(notebook)
notebook.add(tab_settings, text="设置")

available_fonts = sorted(tkFont.families())
font_sizes = [8, 9, 10, 11, 12, 14, 16, 18, 20, 24, 28, 32, 36, 40]

font_family_var = tk.StringVar(value=FONT_CONF.get("family", "Microsoft YaHei"))
font_size_var = tk.StringVar(value=str(FONT_CONF.get("size", 11)))

def apply_font_settings():
    FONT_CONF["family"] = font_family_var.get()
    FONT_CONF["size"] = int(font_size_var.get())
    config["font"] = FONT_CONF
    with open("config.json", "w", encoding="utf-8") as f:
        json.dump(config, f, ensure_ascii=False, indent=2)
    update_fonts()
    style.configure("TButton", font=font_11)
    style.configure("TEntry", font=font_11)
    style.configure("TLabel", font=font_10)
    style.configure("TNotebook.Tab", font=font_10)
    result_list.config(font=font_11)
    text_area.config(font=font_11)
    text_area.tag_config("success", font=font_11_bold)
    text_area.tag_config("keyword", font=font_11_bold)
    text_area.tag_config("tricky", font=font_11_bold)
    about_label.config(font=font_12)

font_frame = ttk.LabelFrame(tab_settings, text="字体设置", padding=10)
font_frame.pack(fill="x", padx=20, pady=20)

row1 = ttk.Frame(font_frame)
row1.pack(fill="x", pady=5)
row1.columnconfigure(1, weight=1)
ttk.Label(row1, text="字体名称：", width=10).grid(row=0, column=0, sticky="w")
ttk.Combobox(
    row1,
    textvariable=font_family_var,
    values=available_fonts,
    state="readonly"
).grid(row=0, column=1, sticky="ew")

""" row2 = ttk.Frame(font_frame)
row2.pack(fill="x", pady=5)
row2.columnconfigure(1, weight=1)
ttk.Label(row2, text="字体大小：", width=10).grid(row=0, column=0, sticky="w")
ttk.Combobox(
    row2,
    textvariable=font_size_var,
    values=[str(size) for size in font_sizes],
    state="readonly"
).grid(row=0, column=1, sticky="ew") """

ttk.Button(
    font_frame,
    text="应用字体",
    command=apply_font_settings,
    bootstyle="primary"
).pack(pady=(10, 0))

result_list.bind("<<ListboxSelect>>", show_answer)
root.mainloop()