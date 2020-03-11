# jsdoc 使用规范说明

最近公司要求代码注释，网上找一堆文章进行参考，但在统一的时候遇到了困难，下面把可能的形式列举出来。

> 暂时只出了方法注释，后面有空了再出组件注释和模块注释等

## 方法注释

先来看一个比较全的示例

```javascript
/**
 * 方法描述
 * @author 戴思阳 <814577465@qq.com>
 * @time 2020年03月09日 19:04:30 星期一
 *
 * @param {string} param - 参数
 *
 * @param {string} param1 - 参数
 * @param {string} param2 - 参数
 *
 * @param {Object} param - 对象
 * @param {string} param.name - 对象的属性
 * @param {string} param.department - 对象的属性
 *
 * @param {Object[]} params - 对象数组
 * @param {string} params[].name - 对象数组元素的属性
 * @param {string} params[].department - 对象数组元素的属性
 *
 * @param {string} [param] - 可选参数
 *
 * @param {string} [param=Dyce] - 可选参数带默认值
 *
 * @param {*} param - 任务类型参数
 *
 * @param {(string|string[])} param - 多种类型参数
 *
 * @param {Object} res 请求返回数据参数
 * @param {requestCallback} cb - 处理异步请求返回数据的回调方法
 * @returns {number}
 *
 * @returns {string} 返回值放在方法注释的最后
 * @returns {Promise} 返回一个Promise
 * @returns {(number|Array)} 多种类型的返回值
 */
function myFunction() {
  // ...
}
```

### 作者时间

使用片段自动生成作者和时间。

请使用**中文全名和qq邮箱**这样大家知道是谁并能过qq号联系。

联系我<814577465@qq.com>添加你的作者信息到片段可选项中。

```javascript
/**
 * 方法描述
 * @author 戴思阳 <814577465@qq.com>
 * @time 2020年03月09日 19:04:30 星期一
 */
function myFunction() {
  // ...
}
```

> 以下示例都省略了作者和时间，开发中请加在方法描述下面一行。

### 返回值

`@returns [{type}] [description]`

返回值类型

```javascript
/**
 * 方法描述
 * @returns {number}
 */
function myFunction() {
  // ...
  return ret
}
```

返回值类型加描述

```javascript
/**
 * 方法描述
 * @returns {string} 返回值放在方法注释的最后
 */
function myFunction() {
  // ...
  return ret
}
```

返回一个Promise

```javascript
/**
 * 方法描述
 * @returns {Promise} 返回一个Promise
 */
function myFunction() {
  // ...
  return new Promise(function(resolve, reject) {
    resolve(a + b);
  });
}
```

多种类型的返回值

```javascript
/**
 * 方法描述
 * @returns {(number|Array)} 多种类型的返回值
 */
function myFunction() {
  // ...
  return ret
}
```

### 参数

无参数

```javascript
/**
 * 方法描述
 */
function myFunction() {
  // ...
}
```

单个简单类型参数

```javascript
/**
 * 方法描述
 * @param {string} param - 参数
 */
function myFunction(param) {
  // ...
}
```

多个简单类型参数

```javascript
/**
 * 方法描述
 * @param {string} param1 - 参数
 * @param {string} param2 - 参数
 */
function myFunction(param1, param2) {
  // ...
}
```

对象类型参数

```javascript
/**
 * 方法描述
 * @param {Object} param - 对象
 * @param {string} param.name - 对象的属性
 * @param {string} param.department - 对象的属性
 */
function myFunction(param) {
  // ...
}
```

对象数组类型参数

```javascript
/**
 * 方法描述
 * @param {Object[]} params - 对象数组
 * @param {string} params[].name - 对象数组元素的属性
 * @param {string} params[].department - 对象数组元素的属性
 */
function myFunction(params) {
  // ...
}
```

可选参数

```javascript
/**
 * 方法描述
 * @param {string} [param] - 可选参数
 */
function myFunction(param) {
  // ...
}
```

可选参数带默认值

```javascript
/**
 * 方法描述
 * @param {string} [param=Dyce] - 可选参数带默认值
 */
function myFunction(param) {
  param = param || 'Dyce'
  // ...
}
```

任意类型参数

```javascript
/**
 * 方法描述
 * @param {*} param - 任务类型参数
 */
function myFunction(param) {
  // ...
}
```

多种类型参数

```javascript
/**
 * 方法描述
 * @param {(string|string[])} param - 多种类型参数
 */
function myFunction(param) {
  // ...
}
```

回调方法参数

```javascript
/**
 * 方法描述
 * @callback requestCallback
 * @param {Object} res 请求返回数据参数
 */
function requestCallback(res) {
  // ...
}

/**
 * 方法描述
 * @param {requestCallback} cb - 处理异步请求返回数据的回调方法
 */
function myFunction(cb) {
    // ...
}
```

## vue组件注释

比较全的示例

```javascript
/**
  * @module components/MyComponent
  * @author 戴思阳 <814577465@qq.com>
  * @time 2020年03月09日 19:04:30 星期一
  * @desc 计数器组件
  * @example <my-component :counter-initor="5" :step="2" />
  * @vue-prop {Number} initialCounter - 组件属性
  * @vue-prop {Number} [step=1] - 可选带默认值组件属性
  * @vue-data {Number} counter - 组件数据
  * @vue-computed {String} message - 计算属性
  * @vue-event {Number} increment - Emit事件
  * @vue-event {Number} decrement - Emit counter's value after decrement
  */
export default {
  name: 'MyComponent',
  props: {
    initialCounter: {
      type: Number,
      required: true,
    },
    step: {
      type: Number,
      default: 1,
    }
  },
  data () {
    return {
      counter: 0,
    }
  },
  computed: {
    message() {
      return `Current value is ${this.counter}`;
    }
  },
  methods: {
    increment() {
      this.counter += 1;
      this.$emit('increment', this.counter);
    },
    decrement() {
      this.counter -= 1;
      this.$emit('decrement', this.counter);
    }
  }
}
```

组件注释片段

```javascript
/**
* @module components/MyComponent
* @author 戴思阳 <814577465@qq.com>
* @time 2020年03月09日 19:04:30 星期一
* @desc 计数器组件
* @example <my-component :counter-initor="5" :step="2" />
* @vue-prop {Number} conterInitor - 组件属性，camelCase
* @vue-prop {Number} [step] - 可选组件属性
* @vue-prop {Number} [step=1] - 可选带默认值组件属性
* @vue-data {Number} counter - 组件数据
* @vue-computed {String} message - 计算属性
* @vue-event {Number} increment - 计数器增加后，触发事件
* @vue-event {Number} decrement - 计数器减小后，触发事件
* https://github.com/Kocal/jsdoc-vuejs
*/
```
