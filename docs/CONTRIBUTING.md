# 贡献指南

欢迎你对本项目的贡献，你的参与非常宝贵！

---

## 如何更新代码

1. [Fork 本仓库](https://github.com/YuleBest/xiaomi-bl-unlock-helper/fork) 并克隆到本地
2. 创建新分支（`feature`/`bugfix`/`你的主题` 均可）
3. 编写代码，请保持注释清晰
4. 本地测试确保无误后，提交并推送分支即可

---

## 如何更新题库

1. [Fork 本仓库](https://github.com/YuleBest/xiaomi-bl-unlock-helper/fork) 并克隆到本地
2. 修改 `data/database/qustion.json` 文件，格式如下：
    ```json
    [
    {"lastestUpdate": "2025/6/18 08:03"},
    {"question":"如何解除手机Bootloader锁？","options":[{"option":"进入MTK模式","is_correct":"false"},{"option":"进入Recovery模式","is_correct":"false"},{"option":"申请解锁通过后，下载工具解锁","is_correct":"true"},{"option":"通过小米助手解锁","is_correct":"false"}]},
    {"question":"请问如何实现保存数据刷机？","options":[{"option":"备份数据—解Bootloader锁—线刷","is_correct":"true"},{"option":"解Bootloader锁—备份数据—线刷","is_correct":"false"},{"option":"解Bootloader锁—线刷—备份数据","is_correct":"false"},{"option":"解Bootloader锁—下载ROM—线刷","is_correct":"false"}]},
    ]
    ```
  > 请在新增/修改题目后同步修改 `lastestUpdate` 里的最后更新日期，并对 JSON 进行压缩

---

## 代码规范

- 请使用原生 JavaScript，避免引入大型框架
- 请保持代码缩进为 4 个空格
- 保持代码简洁易读
- 外观风格保持原风格

---

## 提交说明

- 提交信息简洁明确，例如：`修复 搜索功能模糊匹配问题`
- 新功能请附带使用说明和示例
- 文档更新请确保拼写和格式正确

---

## 报告问题

- 如果发现 Bug 或有功能建议，请在 Issues 中提交详细描述，附带复现步骤和截图（如有）
- 如果发现题目可能有误，请点击题目左上角的题号，选择疑问，可以自动跳转到 Issues 并生成模板

---

## 联系方式

欢迎通过 GitHub Issues 或 Pull Requests 交流，保持沟通顺畅，你也可以通过以下方式联系我，请注明来意

- 电子邮件：yule-best@outlook.com
- QQ：1011567690

---

感谢你的支持，让我们一起把这个项目做得更好！