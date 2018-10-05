const initial = {
    isLogin:false,
    loading : false,
    status:null,
    data:{},
}
const LoginReducer = function(state = initial, action) {
    switch(action.type) {
        case "LOGIN_PENDING":
            return ({
                ...state,
                data: {},
                status: 'pending',
                loading: true,
                isLogin: false
            })
        case "LOGIN_SUCCESS":
            let callStatus = {
                status: 'success',
                loading: false,
                isLogin: true,
                data: action.payload.data
            }
            return Object.assign({}, state, callStatus);
        case "LOGIN_ERROR":
            let callerrStatus = {
                status: 'error',
                loading: false,
                isLogin: false,
                data: action.payload.data
            }
            return Object.assign({}, state, callerrStatus);
        default:
            return state
    }
}

export default LoginReducer