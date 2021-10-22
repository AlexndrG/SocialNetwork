import {connect} from 'react-redux';
import {
    follow, requestUsers,
    unfollow,
    UsersStateType,
} from '../../redux/users-reducer';
import {StateType} from '../../redux/redux-store';
import React, {ComponentType} from 'react';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';
import {compose} from 'redux';
import {
    getPageSize,
    getTotalUserCount,
    getCurrentPage,
    getIsFetching,
    getFollowingInProgress, getUsers
} from '../../redux/users-selectors';


//==================================================================================================================


class UsersContainer extends React.Component<UsersComponentPropsType> {
    componentDidMount() {
        const {users, getUsers, currentPage, pageSize} = this.props
        if (users.length === 0) {
            getUsers(currentPage, pageSize)
        }
    }

    onPageChanged = (pageNumber: number) => {
        const {getUsers, pageSize} = this.props
        getUsers(pageNumber, pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching && <Preloader/>}

                <Users
                    totalUserCount={this.props.totalUserCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}

//==================================================================================================================


// type UsersMapStateToPropsType = {
//     users: Array<UserDataType>
//     pageSize: number
//     totalUserCount: number
//     currentPage: number
// }
type UsersMapStateToPropsType = UsersStateType

// type UsersMapDispatchToProps = {
//     follow: (userId: number) => void
//     unfollow: (userId: number) => void
//     setUsers: (users: Array<UserDataType>) => void
//     setCurrentPage: (pageNumber: number) => void
//     setTotalUsersCount: (totalCount: number) => void
//     toggleIsFetching: (isFetching: boolean) => void
// }
type UsersMapDispatchToProps = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

export type UsersComponentPropsType = UsersMapStateToPropsType & UsersMapDispatchToProps

/*
const mapStateToProps = (state: StateType): UsersMapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}
*/

const mapStateToProps = (state: StateType): UsersMapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}


// const mapDispatchToProps = (dispatch: DispatchType): UsersMapDispatchToProps => {
//     return {
//         follow: (userId: number) => dispatch(followAC(userId)),
//         unfollow: (userId: number) => dispatch(unfollowAC(userId)),
//         setUsers: (users: Array<UserDataType>) => dispatch(setUsersAC(users)),
//         setCurrentPage: (pageNumber: number) => dispatch(setCurrentPageAC(pageNumber)),
//         setTotalUsersCount: (totalCount: number) => dispatch(setTotalUsersCountAC(totalCount)),
//         toggleIsFetching: (isFetching: boolean) => dispatch(toggleIsFetchingAC(isFetching)),
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(UsersComponent)

/*
export default connect(mapStateToProps,
    {
        follow,
        unfollow,
        // getUsers: getUsersThunkCreator,
        getUsers,
    })(UsersContainer)
*/

export default compose<ComponentType>(
    connect(mapStateToProps, {follow, unfollow, getUsers: requestUsers,}),
    // withAuthRedirect
)(UsersContainer)
