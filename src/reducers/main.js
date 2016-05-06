/**
 * Created by David on 5/6/16.
 */
import {MAIN_PAGE_DATA } from '../actions/types';

export default function(state = {}, action){
    switch(action.type){
        case MAIN_PAGE_DATA:
            return {...state, payload: action.payload }; 
    }
    return state;
}
