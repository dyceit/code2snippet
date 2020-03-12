# vue代码片段开发分享

## 分享内容

### 片段目录浏览

通过对片段目录的浏览，大概知道在开发中，那些内容使用频繁，但相似度很高。

### 工具演示

- 工作区引入片段
- 片段生成演示
- 目录生成演示
- 剪贴板记录

### 项目功能开发流程


- 首先确定模块名称和文件名，复制到剪贴板：
  - snippetDemo
  - SnippetDemo
  - 片段
- 新建api接口文件
  - 后端出模块接口，例snippetDemo模块
  - 新建@/api/snippetDemo.js
  - aa_api__file 生成模块接口，如果后端接口命名统一的话
  - 删除多余的接口方法
  - aa_api_get__js，aa_api_post__js添加新的接口方法
- 添加页面
  - 新建 @/views/demos/SnippetDemo.vue
  - 生成组件模板代码 aa_vue__file
  - 添加组件注释 aa_comment_vue_component__js
  - 随便加点内容 这是一个vue代码片段开发的示例
- 添加路由
  - 打开路由配置文件 @/router/index.js
  - 添加路由 aa_router_notag__js
- 添加链接
  - 打开导航条组件 @/views/layout/components/Navbar.vue
  - aa_link_navbar__html
- 页面开发
  - 页面监听数据 aa_vue_data_example__js 保留 msg 显示这个数据到页面
  - 过滤器 aa_vue_filters__js aa_vue_filters_val__js
  - 显示过滤器 aa_vue_filter__html
  - 计算属性 aa_vue_computed__js aa_vue_computed_val__js msg1 显示这个属性到页面
  - 添加数据的按钮 el-button_small_add__html
  - 实例方法 aa_vue_methods_js
  - 添加数据的方法弹窗 aa_helper_modal_open__js
  - 引入弹窗组件 aa_import_component__js
- 页面列表
  - 表格 el-table_loading__html
  - 表格选择列 el-table-column_selection__html
  - 列表数据列 el-table-column_for__html
  - 表格操作列 el-table-column_operate__html
  - 混入分页组件 aa_import_mixin__js
  - 分页组件 jf-pagination-box__html
- 弹窗开发
  - 弹窗模板代码 el-dialog__file
  - 表单 el-form__html
  - 输入框 el-form-item_input__html
  - 配置表单字段 aa_ruleForm_rules__js
  - 验证规则 aa_rules_required_input__js
  - 引入保存接口 aa_import_api__js
  - 保存方法 aa_methods_save_form_validate__js
  - 重置方法 aa_methods_reset_form_validate__js
  - 重置按钮 el-button_small_reset__html
- 页面弹窗回调
  - 刷新列表页面

## 优化及计划的片段

- 项目级别的自定义组件片段
- 项目UI级别的element语法片段
- 系统架构类型的片段
- 公司图标库的查询片段

## vscode片段插件推荐

一些vscode插件已经对vue片段有非常好的整理，可以配合使用。

第三方插件有些代码写法和项目的写法有区别，安装后，在 ~/.vscode/extensions 这个目录下把插件的代码片段复制到项目的.vscode，然后进入定制修改。

- Vue VSCode Snippets
  - sdras.vue-vscode-snippets-1.8.0
- vue-element-admin-snippet
  - liugq.vue-element-admin-snippet-1.1.1 需要修改
- vue-element-snippet
  - liugq.vue-element-snippet-1.1.8 需要修改
- Vue 2 Snippets
  - hollowtree.vue-snippets-0.1.11

## 区别

- 自定义片段和插件片段并不冲突，而是可以搭配使用，效果更好。
- 插件提供的是vue基本语法的使用。
- 自定义片段是在基本语法的基础上完成了项目级别的统一。
- 自定义片段可以自己维护，和对项目的定制化。

## 补充

代码格式化统一

- vue格式化，安装vue-format 0.1.9插件，control + command + p
- js vscode自带，alt + shift + f
