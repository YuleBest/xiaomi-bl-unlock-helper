# 小米BL解锁题库查询工具

一个使用 Python + Tkinter + ttkbootstrap 构建的图形界面应用，方便查询小米 Bootloader 解锁资格考试题库，支持模糊匹配、关键词高亮、字体配置、题目去重与标注等功能。


## 功能特色

- **题目模糊搜索**：支持简写替换，例如 `bl` 自动扩展为 `bootloader`。
- **关键词高亮**：自动高亮搜索词和易错关键词，且可自定义扩展
- **选项展示去重**：展示题目所有不重复的选项及答案，正确项标记为✔，错误项为✘。
- **配置可调**：字体名称与大小可在「设置」页中配置，并立即生效。

## 项目结构

```
main.py               # 主程序
config.json           # 配置文件（字体、关键词等）
questions.db          # 题库数据库（SQLite）
README.md             # 项目说明文档
tools/                # JSON 题库和 SQLite/JSON 转换工具
```

## 使用方法

### 方式一：运行源码

确保你已安装 Python 3.10+ 和依赖项：

```bash
pip install ttkbootstrap
```

然后直接运行：

```bash
python main.py
```

### 方式二：使用打包好的 EXE 文件

打包后的 `.exe` 可直接在 Windows 上运行，无需 Python 环境。首次运行将自动释放 `config.json` 与 `questions.db`。

## 配置说明 (`config.json`)

```json
{
  "fuzzy_keywords": {
    // 简写替换, 例如 "bl" 自动扩展搜索为 "bootloader"
    "bl": "bootloader",
    "fb": "fastboot",
    "rec": "recovery",
    "rom": "刷机包"
  },

  // 高亮关键词
  "tricky_words": [
    "不正确",
    "不包括",
    "错误的是",
    "错误选项",
    "错误的是",
    "不是以下哪项",
    "不能"
  ],

  // 字体配置
  "font": {
    "family": "微软雅黑",
    "size": 10
  }
}
```

你可以根据自己的需求自定义字体和模糊、高亮匹配规则。

## 作者信息

- 作者：于乐（Yule）
- GitHub：[YuleBest](https://github.com/YuleBest)
- 项目初衷：辅助小米高考准备，节省重复记忆成本

---

> 本项目为开源学习用途，题库数据版权归小米公司或其发布方所有，禁止用于商业用途。