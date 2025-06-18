# 小米BL解锁助手题库搜索工具

一个专为小米手机 Bootloader 解锁考试设计的题库搜索工具，帮助用户快速查找和学习相关知识点。

## 🌟 项目特色

- **智能搜索**：支持题干和选项的全文搜索
- **模糊匹配**：内置关键词映射功能（如 "bl" → "bootloader"）
- **高亮显示**：自动标记重要词汇和搜索结果
- **主题切换**：支持明暗主题模式
- **响应式设计**：适配各种屏幕尺寸
- **Material Design**：特色版 Material Design 3 设计语言

## 📋 功能介绍

### 核心功能
- 🔍 **题库搜索**：快速搜索小米 BL 解锁相关题目
- ⚙️ **搜索设置**：可自定义模糊词映射和高亮词
- 📱 **响应式界面**：支持桌面和移动设备
- 🌙 **主题切换**：明暗主题自由切换
- 🧮 **内置计算器**：方便进行相关计算

### 搜索功能
- **多关键词搜索**：支持空格分隔的多个关键词
- **范围选择**：可选择搜索题干、选项或两者
- **智能高亮**：搜索结果和重要词汇自动高亮
- **实时搜索**：输入即时显示搜索结果

### 自定义设置
- **模糊词设置**：自定义关键词映射关系
- **高亮词设置**：设置需要特别标注的词汇
- **设置持久化**：配置自动保存到本地

## 🚀 快速开始

### 在线使用
访问 [bl.lh520.pw](https://bl.lh520.pw)。
> 中文互联网用户可能需要使用代理工具。

### 本地部署
1. 克隆或下载项目到本地
2. 使用任意Web服务器托管项目文件
3. 访问 `index.html` 开始使用

### 简单HTTP服务器
```bash
# 使用Python启动简单服务器
python -m http.server 8000

# 或使用Node.js
npx http-server
```

## 📁 项目结构

```
xiaomi-bl-unlock-helper/
├── index.html              # 主页面文件
├── app.js                  # 核心JavaScript逻辑
├── style.css               # 样式文件
├── icon.ico                # 网站图标
├── data/
│   ├── database/
│   │   └── questions.json  # 题库数据
│   └── fonts/
│       └── DIN.ttf         # 自定义字体
└── README.md               # 项目说明文档
```

## 📖 使用说明

### 基本搜索
1. 在搜索框中输入关键词
2. 选择搜索范围（题干/选项）
3. 查看搜索结果和答案

### 高级设置
1. 点击搜索框右侧的下拉按钮
2. 配置模糊词映射（如："bl" → "bootloader"）
3. 设置高亮词汇（如："错误"、"不正确"等）
4. 点击"应用设置"保存配置

### 主题切换
点击顶部工具栏的主题切换按钮，在明暗主题间切换。

## ⚠️ 重要声明

- 此项目**非小米官方项目**，与小米官方无关
- 本项目为**免费开源项目**，禁止倒卖或商用
- 使用本工具所产生的任何问题由使用者自负
- 项目仅供学习交流使用

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request 来改进项目或更新题库：

### 题库更新
如需更新题库，请修改 `data/database/questions.json` 文件，格式如下：

```json
[
  {"lastestUpdate": "2025/6/18 08:03"},
  {
    "question": "题目内容",
    "options": [
      {"option": "选项A", "is_correct": "false"},
      {"option": "选项B", "is_correct": "true"},
      {"option": "选项C", "is_correct": "false"}
    ]
  }
]
```

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 👨‍💻 作者

**Yule** - [GitHub](https://github.com/YuleBest)

## 🔗 相关链接

- [项目主页](https://github.com/YuleBest/xiaomi-bl-unlock-helper)
- [问题反馈](https://github.com/YuleBest/xiaomi-bl-unlock-helper/issues)
- [小米解锁官网](https://www.miui.com/unlock/)

---

如果这个项目对你有帮助，请给个 ⭐ Star 支持一下！