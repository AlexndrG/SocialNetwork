import React from 'react';
import s from './Login.module.css'
import s2 from '../common/FormsControl/FormsControl.module.css'
import {reduxForm, Field, InjectedFormProps} from 'redux-form';
import {Input} from '../common/FormsControl/FormsControl';
import {required} from '../../utils/validators/validator';
import {connect} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import {StateType} from '../../redux/redux-store';

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {/*<input placeholder={'Login'}/>*/}
                {/*<Field component={'input'} name={'login'} placeholder={'Login'}*/}
                <Field component={Input} name={'email'} placeholder={'Email'}
                       validate={required}
                />
            </div>
            <div>
                {/*<input placeholder={'Password'}/>*/}
                {/*<Field component={'input'} name={'password'} placeholder={'Password'}/>*/}
                <Field component={Input} name={'password'} placeholder={'Password'} type={'password'}
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

            {props.error &&
            <div className={s2.formSummaryError}>
                {props.error}
            </div>}
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)


const Login = (props: PropsType) => {
    const onSubmit = (formData: FormDataType) => {
        // console.log(formData)
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={s.main}>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
            <div style={{display: 'inline-block', border: '2px solid yellow', padding: '5px', margin: '10px 0'}}>
                <b>Тестовые Email и Password</b>
                <br/>Email: <b>free@samuraijs.com</b>
                <br/>Password: <b>free</b>
            </div>
        </div>
    )
}

//==============================================================================

type PropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: StateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
})

type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}

export default connect(mapStateToProps, {login})(Login)