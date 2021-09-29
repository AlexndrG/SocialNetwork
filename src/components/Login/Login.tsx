import React from 'react';
import s from './Login.module.css'
import {reduxForm, Field, InjectedFormProps} from 'redux-form';
import {Input} from '../common/FormsControl/FormsControl';
import {required} from '../../utils/validators/validator';

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {/*<input placeholder={'Login'}/>*/}
                {/*<Field component={'input'} name={'login'} placeholder={'Login'}*/}
                <Field component={Input} name={'login'} placeholder={'Login'}
                       validate={required}
                />
            </div>
            <div>
                {/*<input placeholder={'Password'}/>*/}
                {/*<Field component={'input'} name={'password'} placeholder={'Password'}/>*/}
                <Field component={Input} name={'password'} placeholder={'Password'}
                       validate={required}
                />
            </div>
            <div>
                {/*<input type={'checkbox'}/> Remember me*/}
                {/*<Field component={'input'} type={'checkbox'} name={'rememberMe'}/> Remember me*/}
                <Field component={Input} type={'checkbox'} name={'rememberMe'}/> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    return (
        <div className={s.main}>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}