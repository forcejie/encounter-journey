<template>
  <div>
    <van-tabbar v-model="active" route>
        <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
        <van-tabbar-item icon="like-o" to="/favor">收藏</van-tabbar-item>
        <van-tabbar-item icon="cart-o" to="/order">订单</van-tabbar-item>
        <van-tabbar-item icon="chat-o" to="/message">消息</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const active = ref(0);
</script>

<style lang="less" scoped>
.van-tabbar-item--active {
  color: var( --van-tabbar-item-active-color);
}
</style>