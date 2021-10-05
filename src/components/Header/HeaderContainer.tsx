import React from 'react';
import {connect} from 'react-redux';
import {Header} from './Header';
import {logout} from '../../redux/auth-reducer';
import {StateType} from '../../redux/redux-store';


class HeaderContainer extends React.Component<HeaderComponentPropsType> {
    // componentDidMount() {
    //     this.props.getAuthUserData()
    // }

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
    // setAuthUserData: (userId: string, login: string, email: string) => void
    // getAuthUserData: () => void
    logout: () => void
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
        // setAuthUserData,
        // getAuthUserData,
        logout,
    })(HeaderContainer)