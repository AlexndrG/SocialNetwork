import React from 'react';
import s from './ProfileDataForm.module.css';
import s2 from '../../common/FormsControl/FormsControl.module.css';
import {ContactType} from '../../../redux/profile-reducer';
import {createField, Input} from '../../common/FormsControl/FormsControl';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {required} from '../../../utils/validators/validator';

export type ProfileDataFormType = {
    fullName: string
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    }
}

const ProfileDataForm: React.FC<InjectedFormProps<ProfileDataFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <b>Full name: </b>
            {createField(Input, 'fullName', 'Full name', [required])}

            <b>About me: </b>
            {createField(Input, 'aboutMe', 'About me', [required])}

            <div><b>Contacts:</b>
                {
                    Object.keys(props.initialValues.contacts as ContactType).map(key => {
                        return (
                            <div className={s.contact} key={key}>
                                <b>{key}:</b>
                                {createField(Input, 'contacts.' + key, key, [])}
                            </div>
                        )

                    })
                }
            </div>

            <b>{`Looking for a job: `}</b>
            {createField(Input, 'lookingForAJob', '', [], {type: 'checkbox'})}

            <b>{`My professional skills: `}</b>
            {createField(Input, 'lookingForAJobDescription', 'My professional skills', [required])}

            <div>
                <button>Save</button>
            </div>

            {props.error &&
            <div className={s2.formSummaryError}>
                {props.error}
            </div>}
        </form>
    )
}

export const ProfileDataReduxForm = reduxForm<ProfileDataFormType>({form: 'edit-profile'})(ProfileDataForm)