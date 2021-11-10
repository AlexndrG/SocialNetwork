import React, {ComponentType, Suspense} from 'react';
import './App.css';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {HashRouter, Route, withRouter} from 'react-router-dom';
import {NavbarContainer} from './components/Navbar/NavbarContainer';
import HeaderContainer from './components/Header/HeaderContainer';
// import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
// import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import Login from './components/Login/Login';
import {connect, Provider} from 'react-redux';
import {compose} from 'redux';
import {StateType, store} from './redux/redux-store';
import {initializeApp} from './redux/app-reducer';
import {Preloader} from './components/common/Preloader/Preloader';
import {withSuspense} from './hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavbarContainer/>

                <div className='app-wrapper-content'>

                    {/*<Route path='/dialogs' render={() => <DialogsContainer/>}/>*/}
{/*
                    <Route path='/dialogs' render={() => {
                        return <Suspense fallback={<div>Loading...</div>}>
                            <DialogsContainer/>
                        </Suspense>
                    }}/>
*/}
                    <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>


                    {/*<Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>*/}
{/*
                    <Route path='/profile/:userId?' render={() => {
                        return <Suspense fallback={<div>Loading...</div>}>
                            <ProfileContainer/>
                        </Suspense>
                    }}/>
*/}
                    <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>



                    <Route path='/users' render={() => <UsersContainer/>}/>

                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>

                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        )
    }
}

type AppMapStateToPropsType = {
    initialized: boolean
}

type AppMapDispatchToPropsType = {
    initializeApp: () => void
}

type AppPropsType = AppMapStateToPropsType & AppMapDispatchToPropsType

const mapStateToProps = (state: StateType): AppMapStateToPropsType => ({
    initialized: state.app.initialized
})

const AppContainer = compose<ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App)

const AppSamuraiJS = () => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

export default AppSamuraiJS