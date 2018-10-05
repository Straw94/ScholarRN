// 触发异步请求、   ----- saga监听 type: A_LOGIN 
export const loginAction = (user) => {
    return {
        type: "A_LOGIN",
        payload: user
    }
}

// 进行中
export const loginPending = () => {
    return {
        type: 'LOGIN_PENDING'
    }
}

// 失败
export const loginError = (data) => {
    return {
        type: 'LOGIN_ERROR',
        payload: {
            data
        }
    }   
}

// 成功
export const loginSuccess = (data) => {
    return {
        type: 'LOGIN_SUCCESS',
        payload: {
            data
        }
    }
}