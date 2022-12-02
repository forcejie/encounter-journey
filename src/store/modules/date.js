import { defineStore } from "pinia";

const startDate = new Date()
const endDate = new Date()
endDate.setDate(startDate.getDate() + 1)
const useDateStore = defineStore("date", {
    state: () => ({
        token: "",

        startDate: startDate,
        endDate: endDate,
        isLoading: false
    })
})

export default useDateStore