import {LOAD_USER} from  "./userActions";

const initialState = {
    user:null
}

export const userReducer = (state = initialState, action)=>{
 switch(action.type){
    case LOAD_USER:
        return{
            ...state, user:action.paylod
        }
 }
}