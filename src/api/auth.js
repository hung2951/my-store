import instance from "./config"

export const login = (data)=>{
    return instance.post('/login', data)
}
export const register = (data)=>{
    return instance.post('/signup', data)
}