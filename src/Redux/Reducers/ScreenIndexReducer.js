const imageList = [
    require('../../assets/images/bg.png'),
    require('../../assets/images/bg1.jpg'),
    require('../../assets/images/bg2.png'),
]
const initial = {
    image: imageList[0]
}
const ScreenIndexReducer = function(state = initial, action) {
    switch(action.type) {
        case "CHANGE_IMAGE":
            return {
                ...state,
                image: imageList[action.payload.status]
            }
        default:
            return state
    }
}

export default ScreenIndexReducer