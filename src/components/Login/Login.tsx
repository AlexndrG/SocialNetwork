import React from 'react';
import s from './Login.module.css'
import s2 from '../common/FormsControl/FormsControl.module.css'
import {reduxForm, InjectedFormProps} from 'redux-form';
import {createField, Input} from '../common/FormsControl/FormsControl';
import {required} from '../../utils/validators/validator';
import {connect} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import {StateType} from '../../redux/redux-store';

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

const LoginForm: React.FC<InjectedFormProps<FormDataType, MyReduxFormProps> & MyReduxFormProps> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {/*<Field component={Input} name={'email'} placeholder={'Email'} validate={required}/>*/}
            {createField(Input, 'email', 'Email', [required])}

            {/*<Field component={Input} name={'password'} placeholder={'Password'} type={'password'} validate={required}/>*/}
            {createField(Input, 'password', 'Password', [required], {type: 'password'})}

            {/*<Field component={Input} type={'checkbox'} name={'rememberMe'}/> Remember me*/}
            {createField(Input, 'rememberMe', '', [], {type: 'checkbox'}, 'Remember me')}

            {props.captchaUrl &&
            <img src={props.captchaUrl} alt={'Captcha image'}/>
            }
            {props.captchaUrl &&
            createField(Input, 'captcha', 'Captcha', [required])
            }

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

//==============================================================================

// const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

type MyReduxFormProps = {
    captchaUrl: string
}
const LoginReduxForm = reduxForm<FormDataType,MyReduxFormProps>({form: 'login'})(LoginForm)

// type mapStateToPropsReduxForm = {
//     captchaUrl: string
// }
// const mapStateToPropsReduxForm = (state: StateType): mapStateToPropsReduxForm => ({
//     captchaUrl: state.auth.captchaUrl,
// })
//
// const LoginFormWithMyProps =connect(mapStateToPropsReduxForm, {})(LoginForm)
// const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginFormWithMyProps)

//==============================================================================


const Login = (props: PropsType) => {
    const onSubmit = (formData: FormDataType) => {
        // console.log(formData)
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={s.main}>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>

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
    captchaUrl: string
}
const mapStateToProps = (state: StateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
})

type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

export default connect(mapStateToProps, {login})(Login)