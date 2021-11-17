import React from 'react';
import s from './MyPosts.module.css';
import {MyPostsPropsType} from './MyPostsContainer';
import {Post} from './Posts/Post';
import {Field, InjectedFormProps, reduxForm, reset} from 'redux-form';
import {maxLengthCreator, required} from '../../../utils/validators/validator';
import {Textarea} from '../../common/FormsControl/FormsControl';


const maxLength10 = maxLengthCreator(10)

type MyPostFormDataType = {
    newPostText: string
}

const AddNewPostForm: React.FC<InjectedFormProps<MyPostFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {/*<textarea cols={35} rows={5}/>*/}
                {/*<Field component={'textarea'} name={'newPostText'} placeholder={'Enter post text...'}*/}
                <Field
                    autoFocus
                    component={Textarea} name={'newPostText'} placeholder={'Enter post text...'}
                    cols={35} rows={5}
                    validate={[required, maxLength10]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm<MyPostFormDataType>({form: 'profileAddNewPostForm'})(AddNewPostForm)

export const MyPosts = React.memo((props: MyPostsPropsType) => {
    // console.log('Render!')

    const onAddPost = (values: MyPostFormDataType) => {
        // console.log(formData)
        props.addPostTC(values.newPostText)
    }

    const postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>

            <AddNewPostFormRedux onSubmit={onAddPost} initialValues={{newPostText: ''}}/>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
})