import KKRequest from '../request'

export function getDetailInfos(houseId) {
    return KKRequest.get({
        url: "/detail/infos",
        params: {
            houseId
        }
    })
}