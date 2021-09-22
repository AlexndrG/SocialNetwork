import {connect} from 'react-redux';
import {DialogsStateType, sendMessage, updateNewMessageBody} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {StateType} from '../../redux/redux-store';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';


type DialogsMapStateToPropsType = {
    dialogsPage: DialogsStateType
}

type DialogsMapDispatchToProps = {
    sendMessage: () => void
    updateNewMessageBody: (body: string) => void
}

export type DialogsPropsType = DialogsMapStateToPropsType & DialogsMapDispatchToProps


const mapStateToProps = (state: StateType): DialogsMapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
// const mapDispatchToProps = (dispatch: DispatchType):DialogsMapDispatchToProps => {
//     return {
//         sendMessage: () => {
//             dispatch(sendMessageCreator())
//         },
//         updateNewMessageBody: (body: string) => {
//             dispatch(updateNewMessageBodyCreator(body))
//         }
//     }
// }

// export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)
export const DialogsContainer = withAuthRedirect(
    connect(mapStateToProps,
        {
            sendMessage,
            updateNewMessageBody
        })(Dialogs)
)