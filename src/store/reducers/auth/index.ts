import { IUser } from "../../../models/IUser";
import { ActionEnum, AuthAction, AuthState } from "./types";

const initialState: AuthState = {
    isAuth: false,
    error: '',
    isLoading: false,
    user: {} as IUser
}

export default function authReducer(state = initialState, action: AuthAction): AuthState {
    switch(action.type) {
        case ActionEnum.SET_AUTH:
            return {...state, isAuth: action.payload, isLoading: false}
        case ActionEnum.SET_USER:
            return {...state, user: action.payload}
        case ActionEnum.SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        case ActionEnum.SET_ERROR:
            return {...state, error: action.payload, isLoading: false}
        default:
            return state;
    }
}