import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {ProfileDataType, getUserProfile} from '../../redux/profile-reducer';
import {StateType} from '../../redux/redux-store';
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';

//==================================================================================================================


// class ProfileContainer extends React.Component<ProfileComponentPropsType> {
class ProfileContainer extends React.Component<WithRouterPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }

        this.props.getUserProfile(userId)
        // usersAPI.getProfile(userId).then(data => {
        //         this.props.setUserProfile(data)
        //     })
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>

        return (
            <div>
                <Profile profile={this.props.profile}/>
            </div>
        )
    }
}

//==================================================================================================================
//==================================================================================================================

type PathParamsType = {
    userId: string
}

type WithRouterPropsType = RouteComponentProps<PathParamsType> & ProfileComponentPropsType

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

//==================================================================================================================
//==================================================================================================================


type ProfileMapStateToPropsType = {
    profile: ProfileDataType
    isAuth: boolean
}

type ProfileMapDispatchToProps = {
    // setUserProfile: (profile: ProfileDataType) => void
    getUserProfile: (id: string) => void
}

export type ProfileComponentPropsType = ProfileMapStateToPropsType & ProfileMapDispatchToProps


const mapStateToProps = (state: StateType): ProfileMapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps,
    {
        // setUserProfile
        getUserProfile,
    })(WithUrlDataContainerComponent)
