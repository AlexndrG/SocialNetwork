import React, {MouseEvent} from 'react';

type ProfileStatusPropsType = {
    status: string
}

type ProfileStatusStateType = {
    editMode: boolean
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType, ProfileStatusStateType> {
    state = {
        editMode: false,
    }

    // activateEditMode = (e: MouseEvent<HTMLSpanElement>) => {
    //     this.setState({
    //         editMode: !this.state.editMode
    //     })
    // }

    activateEditMode () {
        // this.state.editMode = true
        // this.forceUpdate()

        this.setState({
            editMode: true,
        })
    }

    deactivateEditMode () {
        this.setState({
            editMode: false,
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    {/*<span onDoubleClick={this.activateEditMode}>{this.props.status}</span>*/}
                    <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input value={this.props.status} autoFocus={true}
                           onBlur={this.deactivateEditMode.bind(this)}/>
                </div>
                }
                <p/>
            </div>
        )
    }
}
