import React, {useReducer} from 'react'
import {AlertContext} from "./alertContext";
import {alertReducer} from "./alertReducer";
import {HIDE_ALERT, SHOW_ALERT} from "../types";

export const AlertState = ({children})=>{
    /**
     * Dispatch function contain useReducer(standard hook) which change our state
     */
    const [state,dispatch]= useReducer(alertReducer, {visible:false});

    /**
     * Makes alert visible
     *
     * @param text
     * @param type has default value 'warning'
     */
    const show = (text,type='warning')=>{
        dispatch({
            type: SHOW_ALERT,
            payload: {text, type}  // payload is optional field, next data for state
        })
    };

    /**
     * Hides alert
     */
    const hide=()=>dispatch({type:HIDE_ALERT});
    return (
        <AlertContext.Provider value = {{show,hide,  //show:show ,rename state object to alert object (contain visible value)
        alert:state}}>
            {children}
        </AlertContext.Provider>
    )
};
