import React, {ChangeEvent} from 'react';
import {log} from 'util';

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

type ProfileStatusStateType = {
    editMode: boolean
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType, ProfileStatusStateType> {
    state = {
        editMode: false,
        // status: this.props.status,
        status: '',
    }

    // activateEditMode = (e: MouseEvent<HTMLSpanElement>) => {
    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
        // console.log(this)
        // debugger

        this.state.status = this.props.status
    }

    /*
        activateEditMode () {
            // this.state.editMode = true
            // this.forceUpdate()

            this.setState({
                editMode: true,
            })
        }
    */

    deactivateEditMode() {
        this.setState({
            editMode: false,
        })

        this.props.updateStatus(this.state.status)
    }

    statusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value,
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <b><i>{`Status: `}</i></b>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || '---no status---'}</span>
                    {/*<span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>*/}
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input value={this.state.status} autoFocus={true}
                           onBlur={this.deactivateEditMode.bind(this)}
                           onChange={event => this.statusChange(event)}/>
                </div>
                }
                <p/>
            </div>
        )
    }
}
