import React from 'react';
import s from './FormsControl.module.css'

const FormControl = ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError && <span> {meta.error} </span>}
        </div>
    )
}


export const Textarea = (props: any) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}


export const Input = (props: any) => {
        const {input, meta, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}


/*


import React from 'react';
import s from './FormsControl.module.css'

export const Textarea = ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {hasError && <span> {meta.error} </span>}
        </div>
    )
}


export const Input = ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                <input {...input} {...props}/>
            </div>
            {hasError && <span> {meta.error} </span>}
        </div>
    )
}


*/