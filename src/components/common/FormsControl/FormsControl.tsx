import React from 'react';
import s from './FormsControl.module.css'
import {Field} from 'redux-form';

const FormControl = ({input, meta: {touched, error}, ...props}: any) => {
    // const hasError = meta.touched && meta.error
    const hasError = touched && error

    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                {props.children}
            </div>
            {/*{hasError && <span> {meta.error} </span>}*/}
            {hasError && <span> {error} </span>}
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

export const createField = (component: (props: any) => JSX.Element, name: string, placeholder: string, validate: Function[], props: any = {}, text: string = '') => (
    <div>
        <Field component={component} name={name} placeholder={placeholder} validate={validate} {...props}/> {text}
    </div>
)

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