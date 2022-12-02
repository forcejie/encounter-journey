<template>
  <div class="kind">
    <template v-for="(item, index) in categories" :key="item.id">
        <div class="content">
            <img :src="item.pictureUrl" alt="">
            <div class="text">{{item.title}}</div>
        </div>
    </template>
  </div>
</template>

<script setup>
import useHomeStore from '@/store/modules/home';
import { storeToRefs } from 'pinia';

const useStore = useHomeStore()
const { categories } = storeToRefs(useStore)
</script>

<style lang="less" scoped>
.kind {
    display: flex;
    height: 80px;
    overflow-x: auto;
    padding: 0 10px;
    &::-webkit-scrollbar {
        display: none;
    }
    .content {
        display: flex;
        flex-shrink: 0;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 70px;
        text-align: center;
        img {
            width: 26px;
            height: 26px;
        }
        .text {
            margin-top: 8px;
            font-size: 12px;
            color: rgb(117, 114, 114);
        }
    }
}
</style>