import { IUser } from "../../../models/IUser";
export interface AuthState {
    isAuth: boolean;
    user: IUser;
    isLoading: boolean;
    error: string
}

export enum ActionEnum {
    SET_AUTH = "SET_AUTH",
    SET_USER = "SET_USER",
    SET_ERROR = "SET_ERROR",
    SET_IS_LOADING = "SET_IS_LOADING",

}
export interface SetAuthAction {
    type: ActionEnum.SET_AUTH,
    payload: boolean
}

export interface SetUserAction {
    type: ActionEnum.SET_USER,
    payload: IUser
}

export interface SetErrorAction {
    type: ActionEnum.SET_ERROR,
    payload: string 
}

export interface SetIsLoadingAction {
    type: ActionEnum.SET_IS_LOADING,
    payload: boolean
}

export type AuthAction = 
    SetAuthAction |
    SetErrorAction |
    SetUserAction |
    SetIsLoadingAction