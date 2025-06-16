import sqlite3
import json
from collections import defaultdict

# 连接 SQLite 数据库
conn = sqlite3.connect("questions.db")
cursor = conn.cursor()

# 查询所有数据
cursor.execute("SELECT question, option, is_correct FROM questions")
rows = cursor.fetchall()

# 整理为原来的 JSON 结构
questions_dict = defaultdict(list)
for question, option, is_correct in rows:
    questions_dict[question].append({
        "option": option,
        "is_correct": is_correct
    })

questions_json = []
for question, options in questions_dict.items():
    questions_json.append({
        "question": question,
        "options": options
    })

# 保存到 JSON 文件
with open("questions.json", "w", encoding="utf-8") as f:
    json.dump(questions_json, f, ensure_ascii=False, indent=2)

print("已成功导出为 questions.json")