import axios from "axios";
import { AppDispatch } from "../..";
import { IUser } from "../../../models/IUser";
import { ActionEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction } from "./types";

export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({type: ActionEnum.SET_USER, payload: user}),
    setIsAuth: (auth: boolean): SetAuthAction => ({type: ActionEnum.SET_AUTH, payload: auth}),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({type: ActionEnum.SET_IS_LOADING, payload: payload}),
    setIsError: (payload: string): SetErrorAction => ({type: ActionEnum.SET_ERROR, payload: payload}),

    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true));
            const response = await axios.get<IUser[]>('./users.json ')
            const mockUser = response.data.find(user => user.username === username && user.password === password)
            if(mockUser) {
                localStorage.setItem('auth', 'true')
                localStorage.setItem('username', mockUser.username)
                dispatch(AuthActionCreators.setUser(mockUser))
                dispatch(AuthActionCreators.setIsAuth(true))
                
            } else {
                dispatch(AuthActionCreators.setIsError('Некорректный логин или пароль'))
            }
            dispatch(AuthActionCreators.setIsLoading(false)) 
        } catch(e) {
            dispatch(AuthActionCreators.setIsError('Произошла ошибка при логине'))
        }        
    },
    logout: () => async (dispatch: AppDispatch) => {
        localStorage.removeItem('auth');
        localStorage.removeItem('username');
        dispatch(AuthActionCreators.setUser({} as IUser ))
        dispatch(AuthActionCreators.setIsAuth(false))
    }
}