import {connect} from 'react-redux';
import {Users} from './Users';
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserDataType
} from '../../redux/users-reducer';
import {DispatchType, StateType} from '../../redux/redux-store';

type UsersMapStateToPropsType = {
    users: Array<UserDataType>
    pageSize: number
    totalUserCount: number
    currentPage: number
}

type UsersMapDispatchToProps = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserDataType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

export type UsersPropsType = UsersMapStateToPropsType & UsersMapDispatchToProps



const mapStateToProps = (state: StateType): UsersMapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
    }
}

const mapDispatchToProps = (dispatch: DispatchType): UsersMapDispatchToProps => {
    return {
        follow: (userId: number) => dispatch(followAC(userId)),
        unfollow: (userId: number) => dispatch(unfollowAC(userId)),
        setUsers: (users: Array<UserDataType>) => dispatch(setUsersAC(users)),
        setCurrentPage: (pageNumber: number) => dispatch(setCurrentPageAC(pageNumber)),
        setTotalUsersCount: (totalCount: number) => dispatch(setTotalUsersCountAC(totalCount)),
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
