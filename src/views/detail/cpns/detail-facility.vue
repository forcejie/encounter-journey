<template>
  <div class="facility">
    <detail-section title="房屋设施" moreText="查看全部设施">
        <div class="inner">
            <template v-for="(item, index) in detailFacility.houseFacilitys" :key="index">
                <div class="item" v-if="detailFacility.facilitySort?.includes(index)">
                    <div class="head">
                        <img :src="item.icon" alt="">
                        <div class="text">{{item.groupName}}</div>
                    </div>
                    <div class="list">
                        <template v-for="(item1,index1) in item.facilitys.slice(0, 4)" :key="index">
                            <div class="item1">
                                <div class="icon"><van-icon name="passed" color="#ff9854"/></div>
                                <span>{{item1.name}}</span>
                            </div>
                        </template>
                    </div>
                </div>
            </template>
        </div>
    </detail-section>
  </div>
</template>

<script setup>
import detailSection from '@/components/detail-section/detail-section.vue';
defineProps({
    detailFacility: {
        type: Object,
        default: () => ({})
    }
})
</script>

<style lang="less" scoped>
.inner {
    padding: 5px 0;
    border-radius: 6px;
    font-size: 12px;
    background-color: #f7f7f7;
    .item {
        display: flex;
        margin: 25px 0;
        .head {
            width: 90px;
            text-align: center;
            img {
                width: 20px;
                height: 20px;
            }
            .text {
                margin-top: 5px;
                color: #000;
            }
        }
        .list {
            flex: 1;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            .item1 {
                display: flex;
                align-items: center;
                box-sizing: border-box;
                margin: 4px 0;
                width: 50%;
                .icon {
                    margin: 0 6px;
                }
                .text {
                    color: #333;
                }
            }
        }
    }
}

</style>