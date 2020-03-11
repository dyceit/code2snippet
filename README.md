# code2snippet

## 介绍

本项目包含以下内容：

- `code2snippet.js` 代码片段生成工具 `code2snippet.vue` 生成 `code2snippet.snippet`
- `snippet2markdown.js` 片段文件 `*.code-snippets` 转化成Markdown说明文档 `snippets.md`
- 项目级 `jsdoc` 统一规范说明
- 项目级 `snippets.md` 代码片段目录

## 代码片段生成工具

### 安装教程

- 下载后放到vscode项目的.vscode目录，不强制，放哪都一样
- 或者git到.vscode目录，随时更新

### 使用说明

1.  在code2snippet.vue编写你的代码
2.  vscode "cmd+k m" 更改语言模式，来高亮代码，格式化相应的代码
3.  `cd xxx/code2snippet` 进入工具目录，然后 `node code2snippet.js`
4.  结果已去除多余空格、转化引号，并保存在code2snippet.snippet文件下
5.  修改名称、prefix、description
6.  将结果复制到相应的片段文件中

## 参与贡献

dyceit
