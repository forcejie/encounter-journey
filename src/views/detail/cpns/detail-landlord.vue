<template>
  <div class="landlord">
    <detail-section title="房东介绍" more-text="查看房东主页">
        <div class="pic">
            <div class="name">V4房东</div>
            <div class="text">越来越好！</div>
        </div>
        <div class="host">
            <img :src="landlord.hotelLogo" alt="">
            <div class="mid">
                <div class="title">{{landlord.hotelName}}</div>
                <div class="tags">
                    <template v-for="(item, index) in landlord.hotelTags" :key="index">
                        <div class="tagtext">{{item.tagText.text}}</div>
                        <span v-if="(index !== landlord.hotelTags.length - 1)" class="divider"> | </span>
                    </template>
                </div>
            </div>
            <div class="right">
                <div class="contact">联系房东</div>
            </div>
        </div>
        <div class="main">
            <template v-for="(item, index) in landlord.hotelSummary">
                <div class="item">
                    <div class="title">{{ item.title }}</div>
                    <div class="score">{{ item.introduction }}</div>
                    <div class="desc">{{ item.tip }}</div>
                </div>
          </template>
        </div>
    </detail-section>
  </div>
</template>

<script setup>
import detailSection from "@/components/detail-section/detail-section.vue"
    defineProps({
        landlord: {
            type: Object,
            default: () => ({})
        }
    })
</script>

<style lang="less" scoped>
.landlord {
    .pic {
        height: 40px;
        background-color: rgb(175, 134, 214);
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        .name {
            margin-left: 10px;
            font-size: 16px;
        }
        .text {
            font-size: 12px;
            color: rgb(225, 218, 218);
        }
    }
    .host {
        margin: 10px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        // justify-content: space-between;
        // align-items: center;
        img {
            width: 54px;
            height: 54px;
            margin-right: 3px;
        }
        .mid {
            // margin-left: 3px;
            .title {
                margin-top: 10px;
                font-size: 18px;
                font-weight: 700;
            }
            .tags {
                display: flex;
                align-items: center;
                justify-content: center;
                .tagtext {
                    margin-top: 3px;
                    font-size: 12px;
                    color: rgb(145, 140, 140);
                }
                .divider {
                    margin: 0 5px;
                }
            }
        }
        .right {
            
        .contact {
            height: 24px;
            line-height: 24px;
            margin-top: 10px;
            // margin-left: 40px;
            background: var(--primary-color);
            // justify-content: flex-end;
            border-radius: 5px;
            color: #fff;
            font-size: 12px;
            text-align: center;
            padding: 0px 5px;
        }
    }
    }
    .main {
        display: flex;
        justify-content: space-between;
        margin: 50px 10px 10px;
        .item {      
            font-size: 12px;   
        }
        .score {
            margin: 5px 0;
            font-size: 18px;
            font-weight: 700;
            color: #333;
        }
        .desc {
            color: #666;
        }
    }
}
</style>