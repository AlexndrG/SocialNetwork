import React from 'react';
import {connect} from 'react-redux';
import {Header} from './Header';
import {getAuthUserData, logout} from '../../redux/auth-reducer';
import {StateType} from '../../redux/redux-store';




class HeaderContainer extends React.Component<HeaderComponentPropsType> {
    componentDidMount() {

        this.props.getAuthUserData()
        // usersAPI.authMe().then(data => {
        //     if (+data.resultCode === 0) {
        //         const {id, login, email} = data.data
        //         this.props.setAuthUserData(id, login, email)
        //     }
        // })
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
    // setAuthUserData: (userId: string, login: string, email: string) => void
    getAuthUserData: () => void
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
        getAuthUserData,
        logout,
    })(HeaderContainer)