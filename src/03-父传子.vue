<template>
  <div>
    <!-- 
      父 -> 子 传值
      需求：每次传入不同的值
      步骤：
         1.子组件-props -(变量) 准备接受
         2.父组件 -处置进去
     -->
    <MyProduct v-for="obj in list" :key="obj.id"
    :title="obj.proname"
    :price="obj.proprice"
    :intro="obj.prointro"></MyProduct>
  </div>
</template>

<script>
// 1.创建组件（.vue文件）
// 2.引入组件
import MyProduct from './components/MyProduct.vue'

export default {
  components: {
    // Product:Product
    MyProduct 
  },
  data() {
    return {
      list: [
    { id: 1, proname: "超级好吃的棒棒糖", proprice: 18.8, info: '开业大酬宾, 全场8折' },
    { id: 2, proname: "超级好吃的大鸡腿", proprice: 34.2, info: '好吃不腻, 快来买啊' },
    { id: 3, proname: "超级无敌的冰激凌", proprice: 14.2, info: '炎热的夏天, 来个冰激凌了' },
],
    }
  }
}
</script>

<style lang="less">
body{
  background-color: pink;
}
</style>