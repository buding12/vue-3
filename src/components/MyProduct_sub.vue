<template>
  <div class="my-product">
    <h3>标题: {{ title }}</h3>
    <p>价格: {{ price }} 元</p>
    <p>{{ intro }}</p>
    <button @click="subFn">小刀砍一刀</button>
  </div>
</template>

<script>
import eventBus from "./EventBus";
export default {
  props: ["index", "title", "price", "intro"],
  methods: {
    subFn() {
      // 1.子组件改父传入的数据不通知父亲，数据一致行
      // 2.单向数据流
      // 3.props是只读的
      // this.price = this.price - 0.1     //识别到了props的值改变了

      // 2.this.$emit()规定方法-主动触发事件
      this.$emit("subprice", this.index, 0.5);
      eventBus.$emit("send", this.index, 0.5); // 跨组件
    },
  },
};
</script>

<style>
.my-product {
  width: 400px;
  padding: 20px;
  border: 2px solid #000;
  border-radius: 5px;
  margin: 10px;
}
</style>