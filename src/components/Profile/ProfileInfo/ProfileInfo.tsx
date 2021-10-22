import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfileDataType} from '../../../redux/profile-reducer';
import {Preloader} from '../../common/Preloader/Preloader';
import userPhoto from '../../assets/images/user.png'
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks';

type ProfileInfoPropsType = {
    profile: ProfileDataType
    status: string
    updateStatus: (status: string) => void
}

export const ProfileInfo = ({profile, status, updateStatus}: ProfileInfoPropsType) => {
    return (
        <div>
            <div className={s.topImg}>
                {/*<img src="https://lh3.googleusercontent.com/proxy/Dha2y0hknTXPBojcVYklYv5cWqSQrFZYpMuGuhKuyTIZXJZT_ScltaxDb0bAEAhVRSH6o5FngHBopLK7PkMo0v8ae_WS2r8yNwYfkg_4hdOI-lHrlZOQDQ"/>*/}
                <img src="https://wallpaperaccess.com/full/1760835.jpg" alt={'background'}/>
            </div>

            {
                profile.photos
                    ?
                    <div className={s.descriptionBlock}>
                        <img src={profile.photos.large ? profile.photos.large : userPhoto} alt={'Avatar'}/>

                        {/*<ProfileStatus*/}
                        <ProfileStatusWithHooks
                            status={status}
                            updateStatus={updateStatus}/>

                        <div><b>Full name: </b>{profile.fullName}</div>
                        <div><b>User Id: </b>{profile.userId}</div>

                        <div><b>About me: </b>{profile.aboutMe}</div>
                        <b>Contacts:</b>
                        <div style={{paddingLeft: '30px'}}>
                            <b><i>facebook: </i></b> {profile.contacts.facebook ? profile.contacts.facebook : ''}
                            <br/><b><i>website: </i></b> {profile.contacts.website ? profile.contacts.website : ''}
                            <br/><b><i>vk:</i></b> {profile.contacts.vk ? profile.contacts.vk : ''}
                            <br/><b><i>twitter:</i></b> {profile.contacts.twitter ? profile.contacts.twitter : ''}
                            <br/><b><i>instagram:</i></b> {profile.contacts.instagram ? profile.contacts.instagram : ''}
                            <br/><b><i>youtube:</i></b> {profile.contacts.youtube ? profile.contacts.youtube : ''}
                            <br/><b><i>github:</i></b> {profile.contacts.github ? profile.contacts.github : ''}
                            <br/><b><i>mainLink:</i></b> {profile.contacts.mainLink ? profile.contacts.mainLink : ''}
                        </div>
                        <div><b>{`Looking for a job: `}</b>
                            {profile.lookingForAJob ? profile.lookingForAJobDescription : 'No'}
                        </div>


                    </div>

                    : <Preloader/>
            }

        </div>
    )

}