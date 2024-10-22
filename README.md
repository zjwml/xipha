# 导力器模拟器

## 项目简介

这是一个基于《轨迹》系列游戏的导力器模拟器，旨在方便轨迹学家进行回路配装。用户可以选择手动配装（先选择回路再查看晶片技能效果）或自动配装（先选择需要的晶片效果再查看一个回路搭配）。目前项目仅支持《英雄传说：界之轨迹》（简称“界轨”）的数据，未来计划增加《英雄传说：黎之轨迹》和《英雄传说：黎之轨迹Ⅱ》（简称“黎12”）的效果。

我现在要实现一个javascript功能，描述如下：定义circuit对象，含有id,name,type,cost4个属性；定义skill对象，含有id,name,chain,cost4个属性；定义slot对象，含有name,chain,cost，excludedNames4个属性；三者的cost都是个含有type和price属性的对象的数组。type有earth,water,fire,wind,time,gold,silver七种取值，chain有weapon,shield,driver,extra四种取值。所求circuit和slot数组长度为16，下标互相对应。skill数组长度不定。当slot的type不为all或none时，对应circuit的type必须和slot的type一致，并且cost按两倍计算。当circuit的name中含有对应slot的excludedName字符串数组里含有的字符时，跳过这个circuit。现在给定一个若干长度的背包数组，一个若干长度的skill数组，一个16位slot数组，一个必须选择的circuitRequirements数组和一个必须排除的circuitExclusions数组，要求返回一个符合要求的16位circuit数组，该数组对象取自背包数组，circuitRequirements里都是circuit的id，必须全部用上。最后达成效果，4个chain下，4个slot的circuit的7种cost的price加起来，大于等于4个chain下的skill的7种cost下每种cost的最大值。

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

现代浏览器或者Internet Explorer 10+.

| [`<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />`](https://godban.github.io/browsers-support-badges/)`</br>`IE / Edge | [`<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />`](https://godban.github.io/browsers-support-badges/)`</br>`Firefox | [`<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />`](https://godban.github.io/browsers-support-badges/)`</br>`Chrome | [`<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />`](https://godban.github.io/browsers-support-badges/)`</br>`Safari |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| IE10, IE11, Edge                                                                                                                                                                                                     | last 2 versions                                                                                                                                                                                                        | last 2 versions                                                                                                                                                                                                    | last 2 versions                                                                                                                                                                                                    |

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
