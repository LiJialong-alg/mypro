# 个人记账系统

这是一个基于 Web 的简单个人记账系统，使用原生 JavaScript 开发，支持记录收入支出、查询和统计功能。

## 功能特点

- 📝 记录收入和支出
- 🔍 多维度查询（按交易号、交易对象、金额、交易方式、备注、时间）
- 📊 自动计算收支统计
- 💾 数据本地存储
- 📅 支持自定义日期时间
- 🗑️ 支持删除单条记录或批量清空
- 📋 提供模拟数据导入功能

## 使用说明

1. 添加新记录：
   - 填写交易对象、金额、选择收支类型
   - 可选填写日期时间和备注信息
   - 点击"添加"按钮保存

2. 查询记录：
   - 选择查询方式（交易号/对象/金额等）
   - 输入查询关键词
   - 点击"查询"按钮显示结果

3. 数据管理：
   - 点击单条记录的"删除"可删除该记录
   - 点击"清空"可删除当前显示的所有记录
   - 首次使用可选择导入模拟数据

## 技术栈

- HTML5
- CSS3
- 原生 JavaScript
- localStorage 本地存储

## 项目结构

```
记账系统/
├── JL记账系统.html    # 主页面
├── css/              # 样式文件
│   └── index.css
├── iconfont/        # 字体图标
│   └── iconfont.css
└── js/              # JavaScript 文件
    ├── js_before.js
    └── js.js        # 主要逻辑代码
```

## 开发者

- 开发者：LiJialong-alg
- GitHub：[https://github.com/LiJialong-alg](https://github.com/LiJialong-alg)

## 如何使用

1. 克隆本仓库：
   ```bash
   git clone https://github.com/LiJialong-alg/Accounting-System.git
   ```

2. 直接打开 `JL记账系统.html` 文件在浏览器中使用

## 注意事项

- 数据使用 localStorage 存储在浏览器中，清除浏览器数据会导致记录丢失
- 建议定期备份重要数据
- 支持主流浏览器（Chrome、Firefox、Edge 等）
