import React, {ChangeEvent} from 'react';

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
        status: this.props.status,
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }

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

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<ProfileStatusStateType>, snapshot?: any) {
        if (this.props.status !== prevProps.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <b><i>{`Status: `}</i></b>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || '---no status---'}</span>
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
