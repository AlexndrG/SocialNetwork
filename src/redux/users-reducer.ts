import {ActionsTypes} from './redux-store'
import {usersAPI} from '../api/api';
import {Dispatch} from 'redux';
import {updateObjectInArray} from '../utils/object-helpers';

export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET-USERS'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
export const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS'

export type UserDataType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: {
        small: string
        large: string
    },
    status: string
    followed: boolean
}

export type UsersStateType = {
    users: Array<UserDataType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}


const initialState: UsersStateType = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}


export const usersReducer = (state: UsersStateType = initialState, action: ActionsTypes): UsersStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                // users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
                users: updateObjectInArray(state.users,'id', action.userId, {followed: true})
            }

        case UNFOLLOW:
            return {
                ...state,
                // users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
                users: updateObjectInArray(state.users,'id', action.userId, {followed: false})
            }

        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }

        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUserCount: action.count
            }

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }

        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }

        default:
            return state
    }
}


export const followSuccess = (userId: number) => {
    return {
        type: FOLLOW,
        userId // userId: userId
    } as const
}

export const unfollowSuccess = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId // userId: userId
    } as const
}

export const setUsers = (users: Array<UserDataType>) => {
    return {
        type: SET_USERS,
        users
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        // currentPage: currentPage
        currentPage
    } as const
}

export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        // count: count
        count: totalUsersCount
    } as const
}

export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    } as const
}

export const toggleFollowingInProgress = (followingInProgress: boolean, userId: number) => {
    return {
        type: TOGGLE_FOLLOWING_IN_PROGRESS,
        followingInProgress,
        userId
    } as const
}

// export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
export const requestUsers = (page: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(setCurrentPage(page))
    dispatch(toggleIsFetching(true))

    const data = await usersAPI.getUsers(page, pageSize)
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
    dispatch(toggleIsFetching(false))
}

export const followUnfollowFlow = async (userId: number, dispatch: Dispatch, apiMethod: Function, actionCreator: Function) => {
    dispatch(toggleFollowingInProgress(true, userId))

    const data = await apiMethod(userId)
    if (+data.resultCode === 0) {
        dispatch(actionCreator(userId))
        dispatch(toggleFollowingInProgress(false, userId))
    }
}

export const unfollow = (userId: number) => async (dispatch: Dispatch) => {
    followUnfollowFlow(userId, dispatch, usersAPI.unfollowUser.bind(usersAPI), unfollowSuccess)
}

export const follow = (userId: number) => async (dispatch: Dispatch) => {
    followUnfollowFlow(userId, dispatch, usersAPI.followUser.bind(usersAPI), followSuccess)
}

/*
export const unfollow = (userId: number) => async (dispatch: Dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId))

    const data = await usersAPI.unfollowUser(userId)
    if (+data.resultCode === 0) {
        dispatch(unfollowSuccess(userId))
        dispatch(toggleFollowingInProgress(false, userId))
    }
}

export const follow = (userId: number) => async (dispatch: Dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId))

    const data = await usersAPI.followUser(userId)
    if (+data.resultCode === 0) {
        dispatch(followSuccess(userId))
        dispatch(toggleFollowingInProgress(false, userId))
    }
}
*/