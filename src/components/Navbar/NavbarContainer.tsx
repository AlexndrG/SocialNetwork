import {connect} from 'react-redux';
import {Navbar} from './Navbar';
import {DispatchType, StateType} from '../../redux/redux-store';
import {DialogsStateType} from '../../redux/dialogs-reducer';
import {SidebarStateType} from '../../redux/sidebar-reducer';


type NavbarMapStateToPropsType = {
    dialogsPage: DialogsStateType
    sidebar: SidebarStateType
}

type NavbarMapDispatchToProps = {
}

export type NavbarPropsType = NavbarMapStateToPropsType & NavbarMapDispatchToProps


const mapStateToProps = (state: StateType): NavbarMapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        sidebar: state.sidebar
    }
}

const mapDispatchToProps = (dispatch: DispatchType): NavbarMapDispatchToProps => {
    return {}
}

export const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)
