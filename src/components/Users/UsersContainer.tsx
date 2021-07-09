import {connect} from 'react-redux';
import {Users} from './Users';
import {followAC, setUsersAC, unfollowAC, UserDataType, UsersStateType} from '../../redux/users-reducer';
import {DispatchType, StateType} from '../../redux/redux-store';

//zzz
// import {Dispatch} from 'redux';

type UsersMapStateToPropsType = {
    usersPage: UsersStateType
}

type UsersMapDispatchToProps = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserDataType>) => void
}

export type UsersPropsType = UsersMapStateToPropsType & UsersMapDispatchToProps



const mapStateToProps = (state: StateType): UsersMapStateToPropsType => {
    return {
        usersPage: state.usersPage
    }
}

//zzz
// const mapDispatchToProps = (dispatch: Dispatch): UsersMapDispatchToProps => {        // без уточнения типов "action"
const mapDispatchToProps = (dispatch: DispatchType): UsersMapDispatchToProps => {
    return {
        follow: (userId: number) => dispatch(followAC(userId)),
        unfollow: (userId: number) => dispatch(unfollowAC(userId)),
        setUsers: (users: Array<UserDataType>) => dispatch(setUsersAC(users)),
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
