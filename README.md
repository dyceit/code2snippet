# code2snippet

> 持续更新中...

可访问以下地址查看最新版本：
- gitee：https://gitee.com/dyceit/code2snippet
- github: https://github.com/dyceit/code2snippet

## 背景

有开发规范，为什么在实际开发中，团队的整体规范统一还是这么难？

- 记不住这么多规范
- 新员工不知道规范是什么
- 每个人的书写习惯不一样

解决方案：统一使用代码片段书写，关键词片段查询语法

vscode中能找到这方面的片段插件，但是并不是完美兼容项目，而且大多不够详细。因此整理了自定义的片段，更好的服务于项目开发。

## 介绍

本项目包含以下内容：

- `code2snippet.js` 代码片段生成工具， `code2snippet.vue` 生成 `code2snippet.snippet`
- `code2snippet-clip.js` 剪切板代码片段生成工具， 剪切板或 `code2snippet.vue` 生成 `../aa.test.code-snippets`
- `snippet2markdown.js` 片段转文档，`*.code-snippets` 转成 `snippets.md`
- `jsdoc.md` 注释规范，方法和组件
- `snippets.md` 片段目录，已整理的片段
- `share.md` 实战示例分享

## 下载

## 项目中引入代码片段

- 文件 - 将工作区另存为 `projectname.code-workspace`
- 在工作区根目录新建 `.vscode` 文件
- 去 gitee 或 github 把项目 fork 到自己的仓库，区分项目级和公司级
- 在项目根目录下导入片段项目 `git clone https://gitee.com/dyceit/code2snippet.git .vscode`
- 也可以把 .vscode 目录加入公司 svn
- 提交更新 `sh git.sh`，第一次推送的时候，可用户名地密码，`git push -u orgin master`

> 注意：git 地址替换成你自己 fork 出来的

## 代码片段生成工具

已升级到命令行方式：

- `cd xxx/.vscode/code2snippet` 进入工具目录，然后 `node code2snippet.js`
- 根据提示生成片段
  - 选择片段输出文件 默认：../aa.test.code-snippets，可进文件修改默认值
  - 输入片段名称
  - 选择片段来源
    - file code2snippet.vue
    - clip 剪切板
  - 输入片段描述
  - 点击链接查看生成结果，并进行优化
- 结果已去除多余空格、转化引号、'$'符号等
- 片段变量说明：https://www.jianshu.com/p/8195b73319da

> vscode "cmd+k m" 更改 code2snippet.vue 语言模式，来高亮代码，格式化相应的代码

## 片段目录生成工具

- `cd xxx/.vscode/code2snippet` 进入工具目录，然后 `node snippet2markdown.js`
- 将自动根据 .vscode目录下的片段片段，生成 snippets.md 片段目录文件
- 将结果复制到相应的片段文件中

## 参与贡献

工具和片段整理：dyceit，技术咨询：vapour
