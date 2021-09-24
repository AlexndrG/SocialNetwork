import React from 'react';
import s from './Login.module.css'
import {reduxForm, Field, InjectedFormProps} from 'redux-form';
import {LoginDataType} from '../../api/api';
import {Redirect} from 'react-router-dom';

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {/*<input placeholder={'Login'}/>*/}
                <Field component={'input'} name={'email'} placeholder={'Login'}/>
            </div>
            <div>
                {/*<input placeholder={'Password'}/>*/}
                <Field component={'input'} name={'password'} placeholder={'Password'}/>
            </div>
            <div>
                {/*<input type={'checkbox'}/> Remember me*/}
                <Field component={'input'} type={'checkbox'} name={'rememberMe'}/> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)



type LoginPropsType = {
    login: (data: LoginDataType) => void
}


export const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        // console.log(formData)
        props.login(formData)
    }


    return (
        <div className={s.main}>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
