import {connect} from 'react-redux';
import {Users} from './Users';
import {ActionsTypes, StateType} from '../../redux/store';
import {followAC, setUsersAC, unfollowAC, UsersType} from '../../redux/users-reducer';

const mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
    return {
        follow: (userId: number) => dispatch(followAC(userId)),
        unfollow: (userId: number) => dispatch(unfollowAC(userId)),
        setUsers: (users: UsersType) => dispatch(setUsersAC(users)),
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
