import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {Route} from 'react-router-dom';
import {ActionType, StateType} from './redux/state';

type PropsType = {
    state: StateType
    dispatch: (action: ActionType) => void
}

export const App = (props: PropsType) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar state={props.state}/>
            <div className='app-wrapper-content'>

                <Route path='/dialogs' render={() => <Dialogs
                    dialogsPage={props.state.dialogsPage}
                    dispatch={props.dispatch}/>
                }/>

                <Route path='/profile' render={() => <Profile
                        profilePage={props.state.profilePage}
                        dispatch={props.dispatch}/>
                    }/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>
    );
}