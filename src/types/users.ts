export interface UsersState{
    data: {
        data: {
            num_elems: number,
            num_pages: number,
            people: Array<TPeople>
        },
        status: string,
    },
    loading: boolean,
    error: null | string,
};

type TPeople = {
    birthdate: string,
    comment: string | null,
    ctime: string,
    default_face_id: number,
    department: string | null,
    external_id: number | null,
    fio: string | null,
    id: number,
    image_ref: string,
    midname: string | null,
    name: string | null,
    phone: string | null,
    position: string | null,
    sex: number,
    status: number,
    surname: string | null,
};

export enum UsersActionTypes {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SECCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

interface FetchUsersAction {
    type: UsersActionTypes.FETCH_USERS
};

interface FetchUsersSuccessAction {
    type: UsersActionTypes.FETCH_USERS_SECCESS,
    payload: {
        data: {
            num_elems: number,
            num_pages: number,
            people: Array<TPeople>
        },
        status: string,
    }
};

interface FetchUsersErrorAction {
    type: UsersActionTypes.FETCH_USERS_ERROR,
    payload: string,
};

export type UsersAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction;