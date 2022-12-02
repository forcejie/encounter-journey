import { defineStore } from "pinia";
import { getHomeCategories, getHomeHouselist, getHotSuggest } from "@/service";

const useHomeStore = defineStore("home", {
    state: () => ({
        hotSuggests: [],
        categories: [],
        houselist: [],
        currentPage: 1
    }),
    actions: {
        async fetchHotSuggestData(){
            const res = await getHotSuggest()
            this.hotSuggests = res.data
        },
        async fetchGetHomeCategories(){
            const res = await getHomeCategories()
            this.categories = res.data
        },
        async fetchHouselistData(){
            const res = await getHomeHouselist(this.currentPage)
            this.houselist.push(...res.data)
            this.currentPage++
        }
    }
})

export default useHomeStore