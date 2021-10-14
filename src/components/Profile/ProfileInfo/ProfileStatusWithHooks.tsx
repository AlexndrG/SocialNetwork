import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

type ProfileStatusStateType = {
    editMode: boolean
    status: string
}

export const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>('')

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const statusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
            <div>
                <b><i>{`Status: `}</i></b>
                <span onDoubleClick={activateEditMode}>{props.status || '---no status---'}</span>
                {/*<span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>*/}
            </div>
            }
            {editMode &&
            <div>
                <input value={status} autoFocus={true}
                       onBlur={deactivateEditMode}
                       onChange={event => statusChange(event)}/>
            </div>
            }
            <p/>
        </div>
    )

}
