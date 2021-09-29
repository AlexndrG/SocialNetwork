import React from 'react';
import s from './Login.module.css'
import {reduxForm, Field, InjectedFormProps} from 'redux-form';

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
                <Field component={'input'} name={'login'} placeholder={'Login'}/>
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