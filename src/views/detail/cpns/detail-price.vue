<template>
  <div class="price">
    <div class="title">{{price.title}}</div>
    <div class="intro">
        <span>{{price.introduction}}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
    price: {
        type: Object,
        default: () => ({})
    }
})
</script>

<style lang="less" scoped>
.price {
    border-top: 5px solid #f2f3f4;
    padding: 16px 16px;
    .title {
        font-size: 16px;
        font-weight: 600;
        margin: 10px 0;
    }
    .intro {
        margin-top: 10px;
        line-height: 1.5;
        font-size: 13px;
        color: rgb(130, 130, 130);
    }
}
</style>