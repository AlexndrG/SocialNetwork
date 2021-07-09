import { connect } from 'react-redux';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';
import {ActionsTypes, StateType} from '../../redux/store';
import {Dialogs} from './Dialogs';

// export const DialogsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     const state = store.getState().dialogsPage
//
//                     const onSendMessageClick = () => {
//                         store.dispatch(sendMessageCreator())
//                     }
//
//                     const onNewMessageChange = (body: string) => {
//                         store.dispatch(updateNewMessageBodyCreator(body))
//                     }
//
//                     return (
//                         <Dialogs
//                             dialogsPage={state}
//                             sendMessage={onSendMessageClick}
//                             updateNewMessageBody={onNewMessageChange}
//                         />
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

const mapStateToProps = (state: StateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch:(action: ActionsTypes) => void) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        updateNewMessageBody: (body:string) => {
            dispatch(updateNewMessageBodyCreator(body))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)