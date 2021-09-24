import React from 'react';
import './App.css';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {Route} from 'react-router-dom';
import {NavbarContainer} from './components/Navbar/NavbarContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {LoginContainer} from './components/Login/LoginContainer';

export const App = () => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <NavbarContainer/>

            <div className='app-wrapper-content'>

                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>

                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>

                <Route path='/login' render={() => <LoginContainer/>}/>

            </div>
        </div>
    );
}