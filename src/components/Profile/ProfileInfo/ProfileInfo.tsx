import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfileDataType} from '../../../redux/profile-reducer';
import {Preloader} from '../../common/Preloader/Preloader';
import userPhoto from '../../assets/images/user.png'

type ProfileInfoPropsType = {
    profile: ProfileDataType
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <div>
            <div className={s.topImg}>
                {/*<img src="https://lh3.googleusercontent.com/proxy/Dha2y0hknTXPBojcVYklYv5cWqSQrFZYpMuGuhKuyTIZXJZT_ScltaxDb0bAEAhVRSH6o5FngHBopLK7PkMo0v8ae_WS2r8yNwYfkg_4hdOI-lHrlZOQDQ"/>*/}
                <img src="https://wallpaperaccess.com/full/1760835.jpg" alt={'background'}/>
            </div>

            {
                props.profile.photos
                    ?
                    <div className={s.descriptionBlock}>
                        {/*ava + description*/}

                        {/*{console.log(props.userProfile)}*/}

                        {/*{props.profile.photos*/}
                        {/*    ? <img src={props.profile.photos.large} alt={'Avatar'}/>*/}
                        {/*    : 'ava + description'*/}
                        {/*}*/}

                        <img src={props.profile.photos.large ? props.profile.photos.large : userPhoto} alt={'Avatar'}/>
                        <div><b>Full name: </b>{props.profile.fullName}</div>
                        <div><b>User Id: </b>{props.profile.userId}</div>

                        <div><b>About me: </b>{props.profile.aboutMe}</div>
                        <b>Contacts:</b>
                        <div style={{paddingLeft: '30px'}}>
                            <b><i>facebook: </i></b> {props.profile.contacts.facebook ? props.profile.contacts.facebook : ''}
                            <br/><b><i>website: </i></b> {props.profile.contacts.website ? props.profile.contacts.website : ''}
                            <br/><b><i>vk:</i></b> {props.profile.contacts.vk ? props.profile.contacts.vk : ''}
                            <br/><b><i>twitter:</i></b> {props.profile.contacts.twitter ? props.profile.contacts.twitter : ''}
                            <br/><b><i>instagram:</i></b> {props.profile.contacts.instagram ? props.profile.contacts.instagram : ''}
                            <br/><b><i>youtube:</i></b> {props.profile.contacts.youtube ? props.profile.contacts.youtube : ''}
                            <br/><b><i>github:</i></b> {props.profile.contacts.github ? props.profile.contacts.github : ''}
                            <br/><b><i>mainLink:</i></b> {props.profile.contacts.mainLink ? props.profile.contacts.mainLink : ''}
                        </div>
                        <div><b>Looking for a
                            job: </b>{props.profile.lookingForAJob ? props.profile.lookingForAJobDescription : 'No'}
                        </div>


                    </div>

                    : <Preloader/>
            }

        </div>
    )

}