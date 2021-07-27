import React from 'react';
import {connect} from 'react-redux';
import {Header} from './Header';
import axios from 'axios';
import {setAuthUserData} from '../../redux/auth-reducer';
import {StateType} from '../../redux/redux-store';

type ResponseType = {
    data: {
        id: string
        email: string
        login: string
    }
    messages: string[]
    fieldsErrors: string[]
    resultCode: string
}

class HeaderContainer extends React.Component<HeaderComponentPropsType> {
    componentDidMount() {
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
        }).then(response => {
            if (+response.data.resultCode === 0) {
                const {id, login, email} = response.data.data
                this.props.setAuthUserData(id, login, email)
            }
        })
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

type HeaderMapStateToPropsType = {
    // id: string
    // email: string
    login: string
    isAuth: boolean
}

type HeaderMapDispatchToPropsType = {
    setAuthUserData: (userId: string, login: string, email: string) => void
}

export type HeaderComponentPropsType = HeaderMapStateToPropsType & HeaderMapDispatchToPropsType

const mapStateToProps = (state: StateType): HeaderMapStateToPropsType => ({
    // id: state.auth.id,
    // email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps,
    {
        setAuthUserData,
    })(HeaderContainer)