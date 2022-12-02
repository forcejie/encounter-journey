<template>
  <div class="app">
    <!-- name属性 -->
    <router-view v-slot="props">
      <keep-alive include="home">
        <component :is="props.Component"></component>
      </keep-alive>      
    </router-view>

    <tab-bar-1 v-if="!route.meta.showTabBar"></tab-bar-1>
    <loading></loading>
  </div>
</template>

<script setup>

import TabBar1 from "@/components/tabbar/TabBar1.vue"
import { useRoute } from "vue-router";
import loading from "./components/loading/loading.vue";

const route = useRoute()
</script>

<style>

</style>
