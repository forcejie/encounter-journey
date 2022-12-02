<template>
  <div class="city">
    <div class="top">
      <van-search 
        v-model="value" 
        shape="round"
        show-action
        @cancel="cancelClick"
        placeholder="城市/位置/区域" />

    <van-tabs v-model:active="tabActive">
        <template v-for="(value, key, index) in allCities" :key="index">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
    </van-tabs>
    </div>
    <div class="content">
      <template v-for="(value, key, index) in allCities" :key="index">
        <city-item v-show="tabActive === key" :group-data="value"></city-item>
      </template>
      
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from 'vue'
import { useRouter } from 'vue-router';
import useCityStore from "../../store/modules/city"
import { storeToRefs } from 'pinia';
import CityItem from "./cpns/city-item.vue"


const router = useRouter()
const value = ref("")
const tabActive = ref(0);

// 回到上一级
const cancelClick = () => {
    router.back()
}


// 网络请求
// const allCities = ref({})
// getCityAll().then(res => {
//   console.log(res)
//   allCities.value = res.data
//   console.log(allCities.value)
// })

// 从store中获取数据
const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const { allCities } = storeToRefs(cityStore)



const currentGroup = computed(() => allCities.value[tabActive.value])


</script>

<style lang="less" scoped>
:deep(.van-tabs__line){
    background: var(--primary-color);
}
// .top {
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
// }
// .content {
//   margin-top: 98px;
// }
.top {
  position: relative;
  z-index: 10;
}
.content {
  height: calc(100vh - 98px);
  overflow-y: auto;
}
</style>