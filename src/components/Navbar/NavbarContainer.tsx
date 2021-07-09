import React from 'react';
import {connect} from 'react-redux';
import { Navbar } from './Navbar';
import {ActionsTypes, DialogsPageType, StateType} from '../../redux/store';

const mapStateToProps = (state: StateType) => {
    return {
        dialogsPage: state.dialogsPage,
        sidebar: state.sidebar
    }
}
const mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
    return {}
}

export const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)
