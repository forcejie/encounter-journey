<template>
  <div>
    <van-tabbar v-model="currentIndex" route>
      <template v-for="(item, index) in tabbarData">
        <van-tabbar-item :to="item.path">
          <template #default>
            <span>{{item.text}}</span>
          </template>
          <template #icon>
            <img v-if="currentIndex !== index" :src="require('@/assets/img/'+item.image)" alt="">
            <img v-else :src="require('@/assets/img/'+item.imageActive)" alt="">
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>
<script setup>
import tabbarData from "@/assets/data/tabbar.js"
import { ref, watch } from 'vue';
import { useRoute } from "vue-router";

const route = useRoute()
const currentIndex = ref(0);
watch(route, (newRoute) => {
  const index = tabbarData.findIndex(item => item.path === newRoute.path)
  if (index === -1) return
  currentIndex.value = index
})


</script>

<style lang="less" scoped>

</style>