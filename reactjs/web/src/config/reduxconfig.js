import { configureStore } from "@reduxjs/toolkit";
import { createStoreHook } from "react-redux";

const reducer = (state=0,action)=>{
    switch(action.type){
        case 'add':
            return ++state;
        case 'sub':
            return --state;
    }
    return state;
}
const reducer1 = (state="india",action)=>{
    console.log('in country reducer',action);
    
    switch(action.type){
        case 'IN':
            return 'india';
        case 'USA':
            return 'america';
    }
    return state;
}

//create store 
export let myStore = configureStore({
    reducer:{
        'myreducer':reducer,
        "countryreducer":reducer1
        }
})



