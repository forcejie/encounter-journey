<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
        <template v-for="(item, index) in houselist" :key="item.data.houseId">
            <home-type-3 
              v-if="item.discoveryContentType === 3" 
              :item-data="item.data"
              @click="onClickDetail(item.data)"
              ></home-type-3>
            <home-type-9 
              v-else="item.discoveryContentType === 9" 
              :item-data="item.data"
              @click="onClickDetail(item.data)"></home-type-9>
        </template>
    </div>
  </div>
</template>

<script setup>
import homeType3 from '@/components/home-item-type3/home-type3.vue';
import homeType9 from '@/components/home-item-type9/home-type9.vue';

import useHomeStore from '@/store/modules/home';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const homeStore = useHomeStore()
const {houselist} = storeToRefs(homeStore)

const router = useRouter()
const onClickDetail = (item) => {
  console.log(item.houseId)
  router.push("/detail/" + item.houseId)
}
</script>

<style lang="less" scoped>
.content {
    // padding: 10px 8px;
    .title {
        font-size: 22px;
        padding: 10px;
    }
    .list {
      display: flex;
      flex-wrap: wrap;
    }
}
</style>