import React from 'react';
import {connect} from 'react-redux';
import {Header} from './Header';
import {setAuthUserData} from '../../redux/auth-reducer';
import {StateType} from '../../redux/redux-store';
import {usersAPI} from '../../api/api';



class HeaderContainer extends React.Component<HeaderComponentPropsType> {
    componentDidMount() {
        usersAPI.authMe().then(data => {
            if (+data.resultCode === 0) {
                const {id, login, email} = data.data
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