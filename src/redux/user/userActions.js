export const LOAD_USER  = "LOAD_USER";

export const loadUserAction = (user)=>{
    return{
        type:LOAD_USER,
        payload:user
    }
}