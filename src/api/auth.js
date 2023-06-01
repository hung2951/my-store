import instance from "./config"

export const login = (data)=>{
    return instance.post('/login', data)
}
export const register = (data)=>{
    return instance.post('/signup', data)
}
export const getAllUsers = ()=>{
    return instance.get('/users')
}
export const decodeToken = (token)=>{
    return instance.post('/decode-auth',token)
}