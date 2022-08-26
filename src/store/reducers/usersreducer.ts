import {UsersAction, UsersActionTypes, UsersState} from "../../types/users";

const initialstate: UsersState = {
    data: {
        data: {
            num_elems: 1,
            num_pages: 1,
            people: [
                {
                    birthdate: "",
                    comment: null,
                    ctime: "",
                    default_face_id: 0,
                    department: null,
                    external_id: null,
                    fio: null,
                    id: 0,
                    image_ref: "",
                    midname: null,
                    name: null,
                    phone: null,
                    position: null,
                    sex: 0,
                    status: 0,
                    surname: ""
                }
            ]
        },
        status: "",
    },
    loading: true,
    error: null,
};

export const usersReducer = (state = initialstate, action: UsersAction): UsersState => {
    switch (action.type){
        case UsersActionTypes.FETCH_USERS:
            return {loading: true, error: null, data: {
                    data: {
                        num_elems: 1,
                        num_pages: 1,
                        people: [
                            {
                                birthdate: "",
                                comment: null,
                                ctime: "",
                                default_face_id: 0,
                                department: null,
                                external_id: null,
                                fio: null,
                                id: 0,
                                image_ref: "",
                                midname: null,
                                name: null,
                                phone: null,
                                position: null,
                                sex: 0,
                                status: 0,
                                surname: ""
                            }
                        ]
                    },
                    status: "",
                }}
        case UsersActionTypes.FETCH_USERS_SECCESS:
            return {loading: false, error: null, data: action.payload}
        case UsersActionTypes.FETCH_USERS_ERROR:
            return {loading: false, error: action.payload, data: {
                    data: {
                        num_elems: 1,
                        num_pages: 1,
                        people: [
                            {
                                birthdate: "",
                                comment: null,
                                ctime: "",
                                default_face_id: 0,
                                department: null,
                                external_id: null,
                                fio: null,
                                id: 0,
                                image_ref: "",
                                midname: null,
                                name: null,
                                phone: null,
                                position: null,
                                sex: 0,
                                status: 0,
                                surname: ""
                            }
                        ]
                    },
                    status: "",
                }}
        default:
            return state
    }
}