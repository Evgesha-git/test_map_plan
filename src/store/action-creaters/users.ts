import {UsersAction, UsersActionTypes} from "../../types/users";
import {Dispatch} from "redux";
import axios from "axios";

export const stateUsers = () => {
    return async (dispatch: Dispatch<UsersAction>) => {
        try {
            dispatch({type: UsersActionTypes.FETCH_USERS});
            const response = await axios.get("https://213.184.245.66:5010/api/get_all_people", {headers: {
                Authorization: "Basic ZmV0ZXN0OnJvb3QxMjM0NTY="
            }});
            dispatch({type: UsersActionTypes.FETCH_USERS_SECCESS, payload: response.data})
        } catch (e){
            dispatch({type: UsersActionTypes.FETCH_USERS_ERROR, payload: 'Произошла ошибка'})
        }
    }
}