import KKRequest from "../request"

export function getHotSuggest(){
    return KKRequest.get({
        url: "/home/hotSuggests"
    })
}

export function getHomeCategories(){
    return KKRequest.get({
        url:"/home/categories"
    })
}

export function getHomeHouselist(currentPage){
    return KKRequest.get({
        url: "/home/houselist",
        params: {
            page: currentPage
        }
    })
}