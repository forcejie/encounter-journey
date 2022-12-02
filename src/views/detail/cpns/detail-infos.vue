<template>
  <div class="infos">
    <div class="name">{{mainInfos.houseName}}</div>
    <div class="content">
        <template v-for="(item, index) in mainInfos.houseTags" :key="index">
            <div 
                v-if="item.tagText"
                :style="{color: item.tagText.color,background:item.tagText.background.color}" 
                class="text">
                {{item.tagText.text}}</div>
        </template>
    </div>
    <div class="comment">
        <div class="left">
            <span class="score">{{mainInfos.commentBrief.overall}}</span>
            <span class="title">{{mainInfos.commentBrief.scoreTitle}}</span>
            <span class="brief">{{mainInfos.commentBrief.commentBrief}}</span>
        </div>
        <div class="right">
            <div class="total">
                {{mainInfos.commentBrief.totalCount}}条评论
                <van-icon name="arrow" />
            </div>
        </div>
    </div>
    <div class="location">
        <div class="place">
            <span class="address">{{mainInfos.nearByPosition.address}}</span>
        </div>
        <div class="around">
            地图·周围 
            <van-icon name="arrow" />
        </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
    mainInfos: {
        type: Object,
        default: () =>({})
    }
})
</script>

<style lang="less" scoped>
.infos {
    padding: 16px;
    background-color: #fff;
    .name {
        font-size: 20px;
        font-weight: 700;
        text-align: justify;
        line-height: 24px;
        overflow: hidden;
        margin-bottom: 6px;
    }
    .content {
        // display: flex;
        // align-items: center;
        // justify-content: space-between;
        margin: 10px 0;
        display: flex;
        justify-content: space-around;
        .text {
            font-size: 12px;
            margin: 0 2px;
            padding: 1px 3px;
            // color: var(--primary-color);
            // background: rgb(231, 231, 231);
            
        }
    }
    .comment {
        display: flex;
        justify-content: space-between;
        background: #f5f7fa;
        height: 34px;
        margin: 12px 0;
        .left {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 3px;
            text-align: center;
            .score {
                font-size: 18px;
                font-weight: 700;
                margin-right: 2px;
            }
            .title {
                font-weight: 600;
                font-size: 12px;
                margin-right: 2px;
            }
            .brief {
                font-size: 9px;
                color: rgb(112, 111, 111);
            }
        }
        .right {
            display: flex;
            justify-content: center;
            align-items: center;
            .total {
                text-align: center;
                color: var(--primary-color);
                font-size: 12px;
            }
        }
    }
    .location {
        display: flex;
        justify-content: space-between;
        background: #f5f7fa;
        height: 34px;
        margin: 12px 0;
        .place {
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 700;
            font-size: 14px;
            margin-left: 5px;
        }
        .around {
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--primary-color);
            font-size: 12px;
        }
    }
}
</style>