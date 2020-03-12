<template>
  <div class="container">
    <!--  template下只能包含一年根节点，这里统一加div.container -->
  </div>
</template>

<script>
/**
 * 方法名称
 * @author 戴思阳 <814577465@qq.com>
 * @time 2020年03月12日 20:27:37 星期四
 * @modifier 戴思阳 <814577465@qq.com>
 * @lastmodified 2020年03月12日 20:27:49 星期四
 */
/**
 * @module components/code2snippet
 * @author 戴思阳 <814577465@qq.com>
 * @time 2020年03月12日 19:39:26 星期四
 * @modifier 戴思阳 <814577465@qq.com>
 * @lastmodified 2020年03月12日 20:10:37 星期四
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
export default {
  name: 'code2snippet',

}
</script>

<style lang="scss" scoped>
.container {
  // 如果没有样式，可以删除style，本项目一般不用写样式
}
</style>
