<template>
  <div class="city-group">
        <van-index-bar :index-list="indexList">   
            <van-index-anchor index="热门" />
            <div class="list">
                <template v-for="(city, index) in groupData.hotCities" :key="index">
                    <div class="city" @click="cityClick(city)">{{city.cityName}}</div>
                </template>
            </div>
        <template v-for="(item, index) in groupData?.cities" :key="index">
            <van-index-anchor :index="item.group" />
            <template v-for="(city, indey) in item.cities" :key="indey">
                <van-cell :title="city.cityName" @click="cityClick(city)" />
            </template>
        
     </template>
    </van-index-bar>
  </div>
</template>

<script setup>
import useCityStore from "@/store/modules/city"
import { computed } from "vue"
import { useRouter } from "vue-router"

const props = defineProps({
        groupData: {
            type: Object,
            default: () => {{}}
        }
    })

// 索引数据
const indexList = computed(() => {
    const list = props.groupData.cities.map(item => item.group)
    list.unshift("#")
    return list
})

const router = useRouter()
const cityStore = useCityStore()
const cityClick = (city) =>{
    // console.log(city)
    cityStore.currentCity = city
    router.back()
}
</script>

<style lang="less" scoped>
.list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 10px;
    margin-right: 15px;
    .city {
        width: 70px;
        height: 28px;
        background-color: #fff4ec;
        border-radius: 14px;
        text-align: center;
        line-height: 28px;
        margin: 6px 0;
    }
}
</style>