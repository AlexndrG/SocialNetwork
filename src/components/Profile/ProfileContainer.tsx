import React, {ComponentType} from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {ProfileDataType, getUserProfile, getStatus, updateStatus} from '../../redux/profile-reducer';
import {StateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from 'redux';

//==================================================================================================================


// class ProfileContainer extends React.Component<ProfileComponentPropsType> {
class ProfileContainer extends React.Component<WithRouterPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }

        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        // if (!this.props.isAuth) return <Redirect to={'/login'}/>

        return (
            <div>
                <Profile profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}/>
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

/*
const WithUrlDataContainerComponent = withRouter(ProfileContainer)
*/

//==================================================================================================================
//==================================================================================================================


type ProfileMapStateToPropsType = {
    profile: ProfileDataType
    status: string
}

type ProfileMapDispatchToProps = {
    // setUserProfile: (profile: ProfileDataType) => void
    getUserProfile: (id: string) => void
    getStatus: (id: string) => void
    updateStatus: (status: string) => void
}

export type ProfileComponentPropsType = ProfileMapStateToPropsType & ProfileMapDispatchToProps


const mapStateToProps = (state: StateType): ProfileMapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
})
/*
export default withAuthRedirect(
    connect(mapStateToProps,
        {
            // setUserProfile
            getUserProfile,
        })(WithUrlDataContainerComponent)
)
*/

export default compose<ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)
