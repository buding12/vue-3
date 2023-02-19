<template>
  <div>
    <!-- ind传入的是第几个组件 -->
    <!-- 1.父组件，@自定义事件 -->
    <div style="float: left">
      <MyProduct
        v-for="(obj, ind) in list"
        :key="obj.id"
        :title="obj.proname"
        :price="obj.proprice"
        :intro="obj.prointro"
        :index="ind"
        @subprice="fn"
      ></MyProduct>
    </div>
    <div style="float: left">
      <List :arr="list"></List>
    </div>
  </div>
</template>

<script>
// 1.创建组件（.vue文件）
// 2.引入组件
import MyProduct from "./components/MyProduct_sub.vue";
import List from "./components/List.vue";

export default {
  components: {
    // Product:Product
    MyProduct,
    List,
  },
  data() {
    return {
      list: [
        {
          id: 1,
          proname: "超级好吃的棒棒糖",
          proprice: 18.8,
          info: "开业大酬宾, 全场8折",
        },
        {
          id: 2,
          proname: "超级好吃的大鸡腿",
          proprice: 34.2,
          info: "好吃不腻, 快来买啊",
        },
        {
          id: 3,
          proname: "超级无敌的冰激凌",
          proprice: 14.2,
          info: "炎热的夏天, 来个冰激凌了",
        },
      ],
    };
  },
  methods: {
    fn(inde, price) {
      this.list[inde].proprice > 0.5 &&
        (this.list[inde].proprice = (this.list[inde].proprice - price).toFixed(
          2
        ));
    },
  },
};
</script>

<style lang="less">
body {
  background-color: pink;
}
</style>