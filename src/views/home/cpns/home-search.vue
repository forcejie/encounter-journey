<template>
  <div class="search-box">
    <div class="location">
      <div class="city">{{currentCity.cityName}}</div>
      <div class="position">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="" @click="onCityJump">
      </div>
    </div>

    <!-- 日历 -->
    <div class="date-range"  @click="show = true" >
        <div class="start">
            <span class="key">入住</span>
            <span>{{startDate}}</span>
        </div>
        <div class="stay">共{{staySum}}晚</div>
        <div class="end">
            <span class="key">离店</span>
            <span>{{endDate}}</span>
        </div>
    </div>

    <van-calendar 
        v-model:show="show" 
        type="range" 
        color="#ff9854"
        :show-confirm="false"
        @confirm="onConfirm" />

        <!-- 价格人数 -->
        <div class="price">
          <div class="start">价格不限</div>
          <div class="end">人数不限</div>
        </div>
        <!-- 热门城市 -->
        <div class="keyword">关键字/位置/民宿名</div>
        <div class="hot">
          <template v-for="(item, index) in hotSuggests" :key="index">
            <div
            class="item"
            :style="{color: item.tagText.color, background: item.tagText.background.color}"
            >{{item.tagText.text}}</div>
          </template>
        </div>

        <!-- 搜索 -->
        <div class="search-box1">
          <div class="btn" @click="onClickBtn">搜索</div>
        </div>
</div>
</template>

<script setup>
import useCityStore from '@/store/modules/city';
import useHomeStore from '@/store/modules/home';
import { storeToRefs } from 'pinia';
import { formatMonthDay, getDiffDays } from '@/utils/format_date';
import { ref } from 'vue'
import router from '@/router';


const cityStore = useCityStore()
const { currentCity } = storeToRefs(cityStore)

// 定义props
// defineProps({
//   hotSuggests: {
//     type: Array,
//     default: () => []
//   }
// })

// 日期范围的处理
const nowDate = new Date()
const newDate = new Date()
newDate.setDate(nowDate.getDate()+1)

const startDate = ref(formatMonthDay(nowDate))
const endDate = ref(formatMonthDay(newDate))
const staySum = ref(getDiffDays(nowDate, newDate))


//日历的显示
const show = ref(false);

const onConfirm = (value) => {
    const selectStartDate = value[0]
    const selectEndDate = value[1]
    startDate.value = formatMonthDay(selectStartDate)
    endDate.value = formatMonthDay(selectEndDate)

    staySum.value = getDiffDays(selectStartDate, selectEndDate)
    show.value = false
}

// 热门建议
const homeStore = useHomeStore()
const { hotSuggests } = storeToRefs(homeStore)

// 种类
const { categories } = storeToRefs(homeStore)

const onClickBtn = () => {
  router.push({
    path: "/search",
    query: {
      startDate: startDate.value,
      endDate: endDate.value,
      currentCity: currentCity.value.cityName
    }
  })
}
</script>

<style lang="less" scoped>
// .search-box {
//     --van-calendar-popup-height: 100%
// }
.location {
  display: flex;
  justify-content: space-around;
  align-items: center;
  // margin-top: 15px;
  height: 44px;
  .city {
    flex: 1;
    font-size: 15px;
    margin-left: 20px;
  }
  .position {
    margin-right: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    .text {
      font-size: 15px;
      margin-right: 5px;
    }
    img {
      width: 18px;
    }
  }
}

.date-range {
    padding: 0 20px;
    height: 44px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .start {
        display: flex;
        flex-direction: column;
        .key {
          color: rgb(118, 119, 119);
          font-size: 12px;
        }
    }
    .end {
        display: flex;
        flex-direction: column;
        .key {
          font-size: 12px;
          color: rgb(118, 119, 119);
        }
    }
}

.price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  color: #999;
  height: 44px;
}
.keyword {
  color: #999;
  height: 44px;
  margin-left: 50px;
  margin-top: 10px;
}

.hot {
  display: flex;
  // justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  // height: 44px;
  padding: 0 20px;
  .item {
    padding: 4px 8px;
    margin: 5px 3px;
    border-radius: 10px;
  }
}
.search-box1 {
    margin: 10px 20px;
    width: 330px;
    height: 35px;
    border-radius: 20px;
    background-color: var(--primary-color);
  .btn {
    text-align: center;
    line-height: 35px;
    font-size: 20px;
    color: #fff;
  }
}
</style>