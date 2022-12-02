<template>
  <div class="home" ref="homeRef">
    <home-banner></home-banner>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <home-search></home-search>
    <home-categories></home-categories>
    <div class="search" v-if="isShowSearch">
      <search-bar></search-bar>
    </div>
    <home-content></home-content>
  </div>
</template>

<script>
export default {
  name: "home"
}
</script>

<script setup>
import {computed, watch} from 'vue'
import homeBanner from './cpns/home-banner.vue';
import homeSearch from "./cpns/home-search.vue"
import homeCategories from './cpns/home-categories.vue';
import homeContent from './cpns/home-content.vue'
import searchBar from '@/components/search-bar.vue';
import { useRouter } from 'vue-router';
import { onMounted, onUnmounted, ref } from "vue"
import useHomeStore from '@/store/modules/home';
import { storeToRefs } from 'pinia';
import useScroll from "@/hooks/useScroll"
// import KKRequest from "@/service/request/index"

// 共享数据
// 发送网络请求
const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
homeStore.fetchGetHomeCategories()
homeStore.fetchHouselistData()

// 发送网络请求
// 1.热门建议
// const hotSuggests = ref([])
// KKRequest.get({
//   url: "/home/hotSuggests"
// }).then(res => {
//   console.log(res)
//   hotSuggests.value = res.data
// })


const router = useRouter()
const onCityJump = () =>{
  router.push({
    path: "/city"
  })
}

// useScroll(() => {
//   homeStore.fetchHouselistData()
// })
const homeRef = ref()
const { isReachBottom, scrollTop } = useScroll(homeRef)
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHouselistData().then(() => {
      isReachBottom.value = false
    })
  }
})

// 搜索框显示的控制
// const isShowSearch = ref(false)
// watch(scrollTop, (newTop) => {
//   isShowSearch.value = newTop > 100
// })

const isShowSearch = computed(() => {
  return scrollTop.value >= 330
})

</script>

<style lang="less" scoped>
.home {
  height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
  padding-bottom: 60px;
}
.banner img{
  width: 100%;
}
.search {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  height: 38px;
  padding: 12px 12px 8px;
  background-color: rgb(254, 251, 251);
}
</style>