import {HIDE_ALERT, SHOW_ALERT} from "../types";


const handlers = {
    [SHOW_ALERT]: (state,{payload})=>({...payload, visible:true}), //{return{...payload, visible:true}} we want return object
    [HIDE_ALERT]: state=>({...state,visible:false}),  //spread operator ...state return
                                                      // object contains field from state (type:HIDE_ALERT)
                                                        //+ new field with key visible
    DEFAULT: state=> state
};

export const alertReducer =(state,action)=>{
   const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state,action)
};
