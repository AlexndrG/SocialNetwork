import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css';
import userPhoto from '../../assets/images/user.png'
import {ContactType, ProfileDataType} from '../../../redux/profile-reducer';
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks';
import {ProfileDataFormType, ProfileDataReduxForm} from './ProfileDataForm';

type ProfileInfoPropsType = {
    isOwner: boolean
    profile: ProfileDataType
    status: string
    updateStatus: (status: string) => void
    savePhoto: (image: File) => void
    saveProfile: (formData: ProfileDataFormType) => Promise<any>
}

export const ProfileInfo = ({isOwner, profile, status, updateStatus, savePhoto, saveProfile}: ProfileInfoPropsType) => {
    const [editMode, setEditMode] = useState(false)

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files && e.currentTarget.files[0]) {
            savePhoto(e.currentTarget.files[0])
        }
    }

    const onSubmit = (formData: ProfileDataFormType) => {
        // console.log(formData)
        // setEditMode(false)

        // saveProfile(formData, setEditMode)

        saveProfile(formData)
            .then(() => {
                setEditMode(false)
            })
    }


    return (
        <div>
            <div>
                {/*<img src="https://lh3.googleusercontent.com/proxy/Dha2y0hknTXPBojcVYklYv5cWqSQrFZYpMuGuhKuyTIZXJZT_ScltaxDb0bAEAhVRSH6o5FngHBopLK7PkMo0v8ae_WS2r8yNwYfkg_4hdOI-lHrlZOQDQ"/>*/}
                <img
                    className={s.topImg}
                    src="https://wallpaperaccess.com/full/1760835.jpg"
                    alt={'background'}
                />
            </div>

            {
                profile.photos
                    ? <div className={s.descriptionBlock}>
                        <img
                            className={s.avatarImage}
                            src={profile.photos.large || userPhoto}
                            alt={'Avatar'}
                        />
                        <br/>
                        {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                        <p/>

                        {/*<ProfileStatus*/}
                        <ProfileStatusWithHooks
                            status={status}
                            updateStatus={updateStatus}
                        />
                        {editMode
                            ? <ProfileDataReduxForm initialValues={profile} onSubmit={onSubmit}/>
                            : <ProfileData profile={profile} isOwner={isOwner} gotoEditMode={setEditMode}/>
                        }

                    </div>

                    : <Preloader/>
            }

        </div>
    )
}

type ProfileDataPropsType = {
    profile: ProfileDataType
    isOwner: boolean
    gotoEditMode: (value: boolean) => void
}

const ProfileData = ({profile, isOwner, gotoEditMode}: ProfileDataPropsType) => {
    return (
        <div>
            <div><b>Full name: </b>{profile.fullName}</div>
            <div><b>User Id: </b>{profile.userId}</div>

            <div><b>About me: </b>{profile.aboutMe}</div>

            <div><b>Contacts:</b>
                {Object.keys(profile.contacts).map(key =>
                    <Contact
                        key={key}
                        contactTitle={key}
                        contactValue={(profile.contacts as ContactType)[key]}
                    />)}
            </div>
            <div><b>{`Looking for a job: `}</b>
                {profile.lookingForAJob ? profile.lookingForAJobDescription : 'No'}
            </div>

            {isOwner &&
            <button onClick={() => gotoEditMode(true)}>Edit</button>
            }
        </div>
    )
}


type ContactPropsType = {
    contactTitle: string
    contactValue: string
}

const Contact = ({contactTitle, contactValue}: ContactPropsType) => {
    return (
        <div className={s.contact}>
            <b>{contactTitle}: </b> {contactValue}
        </div>
    )
}