import KKRequest from "../request"

export function getCityAll() {
    return KKRequest.get({
        url: "/city/all"
    })
}