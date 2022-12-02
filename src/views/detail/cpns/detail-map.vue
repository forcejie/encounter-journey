<template>
  <div>
    <detail-section title="位置周边" more-text="查看更多位置周边">
        <div class="baidu" ref="mapRef">
        </div>
    </detail-section>
  </div>
</template>

<script setup>
import detailSection from '@/components/detail-section/detail-section.vue';
import { onMounted } from '@vue/runtime-core';
import {ref} from 'vue'
const mapRef = ref()

const props = defineProps({
    location: {
        type: Object,
        default: () =>({})
    }
})
onMounted(() => {
    const map = new BMapGL.Map(mapRef.value);          // 创建地图实例 
    const point = new BMapGL.Point(props.location.longitude, props.location.latitude);  // 创建点坐标 
    map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
    const marker = new BMapGL.Marker(point);        // 创建标注   
    map.addOverlay(marker);                     // 将标注添加到地图中
})
</script>

<style lang="less" scoped>
.baidu {
    height: 300px;
}
</style> 