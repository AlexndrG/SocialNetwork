import {ActionsTypes} from './store';

export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET-USERS'

export type LocationType = {
    city: string
    country: string
}

export type UsersDataType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    location: LocationType
    photoUrl: string
}

export type UsersType = Array<UsersDataType>

export type UsersPageType = {
    users: UsersType
}


const initialState: UsersPageType = {
    users:
        [
            // {
            //     id: 1,
            //     followed: false,
            //     fullName: 'Dmitry',
            //     status: 'I am a boss',
            //     location: {city: 'Minsk', country: 'Belarus'},
            //     photoUrl: 'https://jenniferperlmuttergallery.com/wp-content/uploads/2017/07/small-things.jpg'
            // },
            // {
            //     id: 2,
            //     followed: true,
            //     fullName: 'Sasha',
            //     status: 'I am a boss too',
            //     location: {city: 'Moscow', country: 'Russia'},
            //     photoUrl: 'https://4lapy.ru/resize/800x800/upload/iblock/22b/22b595349acfa4af0ef503299fb14a61.jpg'
            // },
            // {
            //     id: 3,
            //     followed: false,
            //     fullName: 'Andrew',
            //     status: 'I am a boss too',
            //     location: {city: 'Kiev', country: 'Ukraine'},
            //     // photoUrl: 'https://i.pinimg.com/originals/77/bf/c6/77bfc6ca4d3ca97b89e2cc82d807e686.png'
            //     photoUrl: 'https://static.wixstatic.com/media/f24615_aae8bfb3012840ecae6fe31af668e2ca~mv2_d_4703_4000_s_4_2.jpg/v1/crop/x_0,y_0,w_4631,h_4000/fill/w_449,h_388,al_c,q_80,usm_0.66_1.00_0.01/DSC_1580.webp'
            // },
        ]
}


export const usersReducer = (state: UsersPageType = initialState, action: ActionsTypes): UsersPageType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }

        case 'SET-USERS':
            return {
                ...state,
                users: [...state.users, ...action.users]
            }


        default:
            return state
    }
}


export const followAC = (userId: number) => {
    return {
        type: FOLLOW,
        userId // userId: userId
    } as const
}

export const unfollowAC = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId // userId: userId
    } as const
}

export const setUsersAC = (users: UsersType) => {
    return {
        type: SET_USERS,
        users
    } as const
}
