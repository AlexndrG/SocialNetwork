import axios from 'axios';
import {UserDataType} from '../redux/users-reducer';
import {ProfileDataType} from '../redux/profile-reducer';

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

type AuthMeResponseType = {
    data: {
        id: string
        email: string
        login: string
    }
    messages: string[]
    fieldsErrors: string[]
    resultCode: string
}

type GetPropfileResponseType = ProfileDataType

type FollowUnfollowUserResponseType = {
    resultCode: string
    messages: string[]
    data: {}
}



export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10): Promise<GetUsersResponseType> {
        return instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    followUser (id: number): Promise<FollowUnfollowUserResponseType> {
        return instance.post<FollowUnfollowUserResponseType>(`follow/${id}`)
            .then(response => response.data)
    },

    unfollowUser (id: number): Promise<FollowUnfollowUserResponseType> {
        return instance.delete<FollowUnfollowUserResponseType>(`follow/${id}`)
            .then(response => response.data)
    },

    getProfile (userId: string): Promise<GetPropfileResponseType> {
        return instance.get<GetPropfileResponseType>(`profile/` + userId)
            .then(response => response.data)
    },


}

export const authAPI = {
    me (): Promise<AuthMeResponseType> {
        return instance.get<AuthMeResponseType>(`auth/me`)
            .then(response => response.data)
    },
}




//=========================================================================================================
//=========================================================================================================
//=========================================================================================================


/*

//=========================================================================================================

export type GetUsersResponseType = {
    items: Array<UserDataType>
    totalCount: number
    error: string
}

export const getUsers = (currentPage: number = 1, pageSize: number = 10): Promise<GetUsersResponseType> => {
    return axios.get<GetUsersResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true,
    })
        .then(response => {
            return response.data
        })
}

//=========================================================================================================

type AuthMeResponseType = {
    data: {
        id: string
        email: string
        login: string
    }
    messages: string[]
    fieldsErrors: string[]
    resultCode: string
}

export const authMe = (): Promise<AuthMeResponseType> => {
    return axios.get<AuthMeResponseType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
    })
        .then(response => response.data)
}

//=========================================================================================================

type GetPropfileResponseType = ProfileDataType

export const getProfile = (userId: string):Promise<GetPropfileResponseType> => {
    return axios.get<GetPropfileResponseType>(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        .then(response => response.data)
}

//=========================================================================================================

type FollowUnfollowUserResponseType = {
    resultCode: string
    messages: string[]
    data: {}
}

export const followUser = (id: number):Promise<FollowUnfollowUserResponseType> => {
    return axios.post<FollowUnfollowUserResponseType>(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {},{
        withCredentials: true,
        headers: {
            'API-KEY': 'ca2d4280-c827-4a30-a630-27fd3baa0cf3',
        },
    })
        .then (response => response.data)
}

export const unfollowUser = (id: number):Promise<FollowUnfollowUserResponseType> => {
    return axios.delete<FollowUnfollowUserResponseType>(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
        withCredentials: true,
        headers: {
            'API-KEY': 'ca2d4280-c827-4a30-a630-27fd3baa0cf3',
        },
    })
        .then (response => response.data)
}

//=========================================================================================================


*/