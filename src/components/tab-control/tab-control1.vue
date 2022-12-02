<template>
  <div class="control">
    <template v-for="(item, index) in titles" :key="index">
        <div class="item" :class="{active: index === currentIndex}" @click="itemClick(index)">
            <span>{{item}}</span>
        </div>
    </template>
  </div>
</template>

<script setup>
import {ref} from 'vue'
const props = defineProps({
    titles: {
        type: Array,
        default: () =>[]
    }
})
const currentIndex = ref(0)
const emit = defineEmits(['tabClick'])
const itemClick = (index) => {
    currentIndex.value = index
    emit('tabClick', index)
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