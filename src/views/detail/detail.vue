<template>
  <div class="detail" top-page ref="detailRef">
    <!-- vant组件 -->
    <!-- <van-tabs v-model:active="active">
      <van-tab title="标签 1">内容 1</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
    </van-tabs> -->
    <!-- options api -->
    <tab-control 
      :titles="[1,2,3,4,5]" 
      class="tabs" 
      v-if="showTabControl"></tab-control>
    <!-- <tab-control
      v-if="showTabControl"
      class="tabs"
      :titles="names"
      @tabItemClick="tabClick"
    /> -->
    <van-nav-bar
      title="房屋详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    
    <!-- 轮播图 -->
    <div class="main" v-if="mainPart">
      <detail-swipe :swipe-data="mainPart.topModule.housePicture.housePics"></detail-swipe>
      <detail-infos :main-infos="mainPart.topModule"></detail-infos>
      <detail-facility :detail-facility="mainPart.dynamicModule.facilityModule.houseFacility"></detail-facility>
      <detail-landlord :landlord="mainPart.dynamicModule.landlordModule"></detail-landlord>
      <detail-map :location="mainPart.dynamicModule.positionModule"></detail-map>
      <detail-price :price="mainPart.introductionModule"></detail-price>
    </div>
    <div class="footer">
      <img src="@/assets/img/detail/icon_ensure.png" alt="">
      <div class="text">旅途, 永无止境!</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { getDetailInfos } from '@/service';
import { computed, useSlots } from '@vue/runtime-core';
import { useRouter, useRoute } from 'vue-router';
import detailSwipe from './cpns/detail-swipe.vue';
import DetailInfos from './cpns/detail-infos.vue'
import detailFacility from './cpns/detail-facility.vue';
import detailLandlord from './cpns/detail-landlord.vue';
import detailMap from './cpns/detail-map.vue';
import detailPrice from './cpns/detail-price.vue';
// import tabControl from '@/components/tab-control/tab-control.vue';
import tabControl from '@/components/tab-control/tab-control.vue';
import useScroll from '@/hooks/useScroll';

const router = useRouter()
const route = useRoute()
const houseId = route.params.id

const onClickLeft = () => {
  router.back()
}

const active = ref(0);
// 发送网络请求获取数据
const detailInfos = ref({})
const mainPart = computed(() => detailInfos.value.mainPart)

getDetailInfos(houseId).then(res => {
  console.log(houseId)
  detailInfos.value = res.data
})


// tabcontrol
const detailRef = ref()
const { scrollTop } = useScroll(detailRef)
const showTabControl = computed(() => {
  return scrollTop.value >= 300
})
</script>

<style lang="less" scoped>
 :deep .van-nav-bar__title {
  color: #ff9654;
}
 :deep .van-tabs__line {
  background: var(--primary-color) !important;
}
.tabs {
  position: fixed;
  z-index: 9;
  left: 0;
  right: 0;
  top: 0;
}
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;

  img {
    width: 123px;
  }

  .text {
    margin-top: 12px;
    font-size: 12px;
    color: #7688a7;
  }
}
</style>