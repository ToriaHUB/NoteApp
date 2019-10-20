import React,{useReducer} from 'react'
import {FirebaseContext} from "./firebaseContext";
import {firebaseReduser} from "./firebaseReduser";

export const FirebaseState = ({children})=>{
    const initialState ={
        notes: [],
        loading:false
    };
    const [state, dispatch]=useReducer(firebaseReduser, initialState);

    return (
        <FirebaseContext.Provider value = {{}}>
            {children}
        </FirebaseContext.Provider>
    )
};
