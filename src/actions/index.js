import axios from 'axios';
import { API_URL } from '../config';
import { MAIN_PAGE_DATA } from './types';


export function getMainData(){

    return dispatch => {
        axios.get(API_URL, { headers: {authorization: localStorage.getItem('token')}})
            .then(response=>{
                dispatch({
                    type: MAIN_PAGE_DATA,
                    payload: response.data
                }); 
            })
            .catch(response=>{

            });
    }
}
