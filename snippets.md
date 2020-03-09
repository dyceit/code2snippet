
## ./../aa.debugger.code-snippets
 
 <div style="width:250px">片段</div> | <div style="width:500px">描述</div> 
 ---|--- 
 aa_log__js | 打印数据 
 aa_log_stringify__js | 打印对象为字符串，方便复制 
 aa_log_return__js | 打印并终止 
 
## ./../aa.vue.code-snippets
 
 <div style="width:250px">片段</div> | <div style="width:500px">描述</div> 
 ---|--- 
 aa_vue__file | vue组件模板，生成template、script、style，并根据文件名生成组件name 
 aa_vue_global_directive_example__js | vue全局指令-示例 
 aa_vue_global_filter_example__js | vue全局过滤器-示例 
 aa_vue_components__js | vue组件引入 
 aa_vue_directives__js | vue局部指令 
 aa_vue_directives_inserted__js | vue局部指令-当被绑定的元素插入到DOM中时 
 aa_vue_directives_bind__js | vue局部指令-指令第一次绑定到元素时调用 
 aa_vue_filters__js | vue过滤器 
 aa_vue_filters_val__js | vue过滤器-定义不带参数，{{ str | capitalize}} 
 aa_vue_filters_args__js | vue过滤器-定义带参数，{{ str | capitalize(arg1)}} 
 aa_vue_filter__html | 过滤器：在双花括号中，如果带参filterName(param) 
 aa_vue_props__js | vue组件属性 
 aa_vue_props_number__js | vue组件属性-数字类型 
 aa_vue_props_string__js | vue组件属性-字符串类型 
 aa_vue_props_boolean__js | vue组件属性-布尔类型 
 aa_vue_props_array__js | vue组件属性-数组类型，引用传参，不用emit也能改变父组件的值 
 aa_vue_props_object__js | vue组件属性-对象类型，引用传参，不用emit也能改变父组件的值 
 aa_vue_props_function__js | vue组件属性-函数类型 
 aa_vue_props_multiple__js | vue组件属性-多个类型 
 aa_vue_props_required__js | vue组件属性-必填 
 aa_vue_props_example__js | vue组件属性-示例 
 aa_vue_data__js | vue实例的响应式数据对象，只有当实例被创建时就已经存在于data中的属性才是响应式的 
 aa_vue_data_example__js | vue实例的响应式数据对象示例 
 aa_vue_computed__js | vue计算属性 
 aa_vue_computed_val__js | vue计算属性-定义格式 
 aa_vue_computed_example__js | vue计算属性-示例 
 aa_vue_watch__js | vue数据侦听 
 aa_vue_watch_val__js | vue数据侦听-基本类型 
 aa_vue_watch_deep__js | vue数据侦听-引用类型 
 aa_vue_watch_immediate__js | vue数据侦听-该回调将会在侦听开始之后被立即调用 
 aa_vue_watch_multiple__js | vue数据侦听-多个方法 
 aa_vue_watch_prop__js | vue数据侦听-对象属性 
 aa_vue_watch_example__js | vue数据侦听-示例 
 aa_vue_lifecycle_beforeCreate__js | vue生命周期-在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。 
 aa_vue_lifecycle_created__js | vue生命周期-在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。 
 aa_vue_lifecycle_beforeMount__js | vue生命周期-在挂载开始之前被调用：相关的 render 函数首次被调用。该钩子在服务器端渲染期间不被调用。 
 aa_vue_lifecycle_mounted__js | vue生命周期-el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。注意 mounted 不会承诺所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以用 vm.$nextTick 替换掉 mounted 
 aa_vue_lifecycle_beforeUpdate__js | vue生命周期-数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。该钩子在服务器端渲染期间不被调用，因为只有初次渲染会在服务端进行。 
 aa_vue_lifecycle_updated__js | vue生命周期-由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用计算属性或 watcher 取而代之。注意 updated 不会承诺所有的子组件也都一起被重绘。如果你希望等到整个视图都重绘完毕，可以用 vm.$nextTick 替换掉 updated：该钩子在服务器端渲染期间不被调用。 
 aa_vue_lifecycle_activated__js | vue生命周期-keep-alive 组件激活时调用。该钩子在服务器端渲染期间不被调用。 
 aa_vue_lifecycle_deactivated__js | vue生命周期-keep-alive 组件停用时调用。该钩子在服务器端渲染期间不被调用。 
 aa_vue_lifecycle_beforeDestroy__js | vue生命周期-实例销毁之前调用。在这一步，实例仍然完全可用。该钩子在服务器端渲染期间不被调用。 
 aa_vue_lifecycle_destroyed__js | vue生命周期-Vue实例销毁后调用。调用后，Vue实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。该钩子在服务器端渲染期间不被调用。 
 aa_vue_lifecycle_errorCaptured__js | vue生命周期-异常捕获 
 aa_vue_lifecycle_example__js | vue生命周期-示例 
 aa_vue_methods__js | vue方法 
 aa_vue_nextTick__js | aa_vue_nextTick__js 
 
## ./../dbutils.code-snippets
 
 <div style="width:250px">片段</div> | <div style="width:500px">描述</div> 
 ---|--- 
 aa_snippet__json | 创建代码片段示例 
 aa_lang__js | 打印多语言 
 aa_helper_modal_open__js | 打开弹窗 
 aa_import_options__js | 引用options中的选项值 
 aa_import_common__js | 引用common中的方法 
 aa_import_lodash__js | 引用lodash工具类 
 aa_import_component__js | 引用公共组件 
 aa_import_frontendpage__js |  
 aa_mixins_frontendpage__js | 前端分页-混入 
 aa_frontendpage__html | 前端分页-html 
 aa_customControls__js_import |  
 aa_customControls__js_mixins |  
 aa_component_vuedraggable__js_import |  
 aa_component_vuedraggable__html |  
 aa_save_validate__js |  
 aa_reset_form_validate__js |  
 aa_jsdoc__comment |  
 el-button_small_add__html |  
 el-button_small_save__html |  
 el-button_small_cancel__html |  
 el-dialog__file |  
 el-dialog__html |  
 el-tooltip__html |  
 el-table_loading__html |  
 el-table_rowclick__html |  
 el-table-column_for__html |  
 el-table-column_selection__html |  
 el-table-column_operate__html |  
 el-form__html |  
 el-form_detail__html |  
 el-form-item_span__html |  
 el-form-item_input__html |  
 el-form-item_input_number__html |  
 el-form-item_textarea__html |  
 el-form-item_select__html |  
 el-form-item_checkbox__html |  
 el-form-item_radio__html |  
 el-dropdown__html |  
 aa_rules_required_input__js |  
 aa_rules_required_input_number__js |  
 aa_rules_required_select__js |  
 aa_rules_required_checkbox__js |  
 aa_rules_required_datetime__js |  
 aa_rules_min_max_length__js |  
 aa_rules_min_length__js |  
 aa_rules_max_length__js |  
 aa_rules_validator__js |  
 aa_sortable_import__js | 引入拖动排序 
 aa_sortable_call__js | 调用表格行拖动排序方法 
 aa_sortable_rowkey__js | 表格行拖动排序的唯一键 
 aa_sortable_rowsort__js |  
 el-scrollbar__html |  
 aa_localstorage_get__js |  
 aa_localstorage_set__js |  
 
## ./../dbutils.jf.code-snippets
 
 <div style="width:250px">片段</div> | <div style="width:500px">描述</div> 
 ---|--- 
 jf-container__js_import | jf-container__js_import 
 jf-container__html | jf-container__html 
 jf-tips-box__html | jf-tips-box__html 
 jf-tips-box__js_import | jf-tips-box__js_import 
 jf-form-group-box__html | jf-form-group-box__html 
 jf-form-group-box__js_import | jf-form-group-box__js_import 
 jf-select-user__js_import | jf-select-user__js_import 
 jf-select-user__js_modal_open | jf-select-user__js_modal_open 
 jf-image-upload__js_import | jf-image-upload__js_import 
 jf-image-upload__html | jf-image-upload__html 
 jf-pagination-box__html | jf-pagination-box__html 
 jf-select-product__js_open_dialog | jf-select-product__js_open_dialog 
 jf-select-product__js_import | jf-select-product__js_import 
 jf-icomet-progress__js_import |  
 jf-icomet-progress__js_open_dialog |  
 
## ./../dbutils.jf.upload.code-snippets
 
 <div style="width:250px">片段</div> | <div style="width:500px">描述</div> 
 ---|--- 
 jf-input-file__html |  
 jf-input-file__js_import |  
 
## ./../dbutils.request.code-snippets
 
 <div style="width:250px">片段</div> | <div style="width:500px">描述</div> 
 ---|--- 
 aa_request_async_await__js |  
 aa_request_then__js |  
 aa_request_res_message__js |  
 aa_request_res_data__js |  
 aa_request_getDetail_then__js | 获取数据then 
 aa_request_getDetail_async__js | 获取数据async