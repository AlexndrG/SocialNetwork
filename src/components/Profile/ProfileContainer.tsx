import React from 'react';
import {Profile} from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {ProfileDataType, setUserProfile} from '../../redux/profile-reducer';
import {StateType} from '../../redux/redux-store';

//==================================================================================================================

type ResponseType = ProfileDataType


class ProfileContainer extends React.Component<ProfileComponentPropsType> {

    componentDidMount() {
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile}/>
            </div>
        )
    }
}

//==================================================================================================================


type ProfileMapStateToPropsType = {
    profile: ProfileDataType
}

type ProfileMapDispatchToProps = {
    setUserProfile: (profile: ProfileDataType) => void
}

export type ProfileComponentPropsType = ProfileMapStateToPropsType & ProfileMapDispatchToProps


const mapStateToProps = (state: StateType): ProfileMapStateToPropsType => ({
        profile: state.profilePage.profile
})

export default connect(mapStateToProps,
    {
        setUserProfile
    })(ProfileContainer)
