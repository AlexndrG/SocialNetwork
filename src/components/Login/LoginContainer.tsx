import {connect} from 'react-redux';
import {StateType} from '../../redux/redux-store';
import {login} from '../../redux/auth-reducer';
import {Login} from './Login';
import React from 'react';
import {LoginDataType} from '../../api/api';




type LoginMapStateToProps = {
}

const mapStateToProps = (state: StateType) => {
    return {
    }
}

type LoginMapDispatchToPropsType = {
    login: (data: LoginDataType) => void
}

export type LoginPropsType = LoginMapStateToProps & LoginMapDispatchToPropsType

export const LoginContainer = connect(mapStateToProps, {login})(Login)