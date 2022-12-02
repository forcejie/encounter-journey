<template>
  <div class="control">
    <template v-for="(item, index) in titles" :key="index">
        <div 
            class="item" 
            :class="{active: index === currentIndex}" 
            @click="itemClick(index)">
            <span>{{item}}</span>
        </div>
    </template>
  </div>
</template>

<script>
export default {
    props: {
        titles: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            currentIndex: 0
        }
    },
    emits: ["tabItemClick"],
    methods: {
        itemClick(index) {
            this.currentIndex = index
            this.$emit("tabItemClick",index)
        }
    }
}
</script>

<style lang="less" scoped>
  .control {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    background-color: #fff;
  }

  .item {
    flex: 1;
  }
  .item.active {
        color: var(--primary-color);
        font-weight: 700;
}
  .item.active span {
        border-bottom: 3px solid var(--primary-color);
        padding: 8px;
    }

  

  
</style>