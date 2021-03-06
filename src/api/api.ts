import axios from 'axios';
import {UserDataType} from '../redux/users-reducer';
import {ProfileDataType} from '../redux/profile-reducer';
import {ProfileDataFormType} from '../components/Profile/ProfileInfo/ProfileDataForm';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'ca2d4280-c827-4a30-a630-27fd3baa0cf3',
    },
})


//=========================================================================================================

export type GetUsersResponseType = {
    items: Array<UserDataType>
    totalCount: number
    error: string
}

type ResponseType<T = {}> = {
    data: T
    resultCode: string
    messages: string[]
}


export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10): Promise<GetUsersResponseType> {
        return instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    followUser(id: number): Promise<ResponseType> {
        return instance.post<ResponseType>(`follow/${id}`)
            .then(response => response.data)
    },

    unfollowUser(id: number): Promise<ResponseType> {
        return instance.delete<ResponseType>(`follow/${id}`)
            .then(response => response.data)
    },


    getProfile(userId: string): Promise<GetPropfileResponseType> {
        console.warn(`!!! Don't use this method !!! Use profileAPI !!!`)
        return profileAPI.getProfile(userId)
    },

}
// =============================================================================================

type GetPropfileResponseType = ProfileDataType

type GetStatusResponseType = string

export type PhotoData = {
    photos: {
        small: string
        large: string
    }
}

export const profileAPI = {
    getProfile(userId: string): Promise<GetPropfileResponseType> {
        return instance.get<GetPropfileResponseType>(`profile/` + userId)
            .then(response => response.data)
    },

    getStatus(userId: string): Promise<GetStatusResponseType> {
        return instance.get<GetStatusResponseType>(`profile/status/` + userId)
            .then(response => response.data)
    },

    updateStatus(status: string): Promise<ResponseType> {
        return instance.put<ResponseType>(`profile/status/`, {status: status})
            .then(response => response.data)
    },

    savePhoto(photoFile: File): Promise<ResponseType<PhotoData>> {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put<ResponseType<PhotoData>>(`profile/photo/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => response.data)
    },

    saveProfile(formData: ProfileDataFormType): Promise<ResponseType> {
        return instance.put<ResponseType>(`profile/`, formData)
            .then(response => response.data)
    },
}

// =============================================================================================

type UserData = {
    id: string
    email: string
    login: string
}

type UserId = {
    id: string
}

type AuthMeResponseType<T = {}> = {
    data: T
    messages: string[]
    fieldsErrors: string[]
    resultCode: string
}

export const authAPI = {
    me(): Promise<AuthMeResponseType<UserData>> {
        return instance.get<AuthMeResponseType<UserData>>(`auth/me`)
            .then(response => response.data)
    },

    // login(email: string, password: string, rememberMe: boolean = false): Promise<AuthMeResponseType<UserId>> {
    login(email: string, password: string, rememberMe: boolean, captcha: string): Promise<AuthMeResponseType<UserId>> {
        return instance.post<any>(`auth/login`, {email, password, rememberMe, captcha})
            .then(response => response.data)
    },

    logout(): Promise<AuthMeResponseType> {
        return instance.delete<AuthMeResponseType>(`auth/login`)
            .then(response => response.data)
    },

}

// =============================================================================================

type GetCapthaUrlResponseType = {
    url:string
}

export const securityAPI = {
    getCapthaUrl(): Promise<GetCapthaUrlResponseType> {
        return instance.get<GetCapthaUrlResponseType>(`security/get-captcha-url`)
            .then(response => response.data)
    },
}