# 导力器模拟器

## 项目简介

这是一个基于《轨迹》系列游戏的导力器模拟器，旨在方便轨迹学家进行回路配装。用户可以选择手动配装（先选择回路再查看晶片技能效果）或自动配装（先选择需要的晶片效果再查看一个回路搭配）。目前项目仅支持《英雄传说：界之轨迹》（简称“界轨”）的数据，未来计划增加《英雄传说：黎之轨迹》和《英雄传说：黎之轨迹Ⅱ》（简称“黎12”）的效果。

## 功能描述

- **手动配装**：用户可以选择不同的回路，并查看对应的晶片技能效果。
- **自动配装**：用户可以选择需要的晶片效果，系统会自动推荐一个合适的回路搭配。
- **数据支持**：目前支持《英雄传说：界之轨迹》的数据，后续将增加黎乃至空零碧的支持（闪就没有配装的必要了吧）。

## 技术栈

- **前端框架**：Vue 3
- **路由管理**：vue-router
- **HTTP 客户端**：axios
- **状态管理**：pinia
- **UI 组件库**：TDesign

## 浏览器最低版本要求

为了确保最佳的用户体验，建议使用以下浏览器的最低版本：

线代浏览器或者Internet Explorer 10+.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Safari |
| --------- | --------- | --------- | --------- |
| IE10, IE11, Edge | last 2 versions | last 2 versions | last 2 versions |

## 开发与运行

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run serve
```

### 构建生产环境

```bash
npm run build
```

## 贡献指南

欢迎贡献代码和提出改进建议！请遵循以下步骤：

1. Fork 本仓库。
2. 创建一个新的分支：`git checkout -b my-feature`
3. 提交你的更改：`git commit -m 'Add some feature'`
4. 推送到你的分支：`git push origin my-feature`
5. 提交 Pull Request

## 许可证

本项目采用 MIT License 许可证。

## 联系方式

如有任何问题或建议，请在 GitHub 上提交 Issue。

感谢对《轨迹》系列导力器模拟器的关注和支持！
