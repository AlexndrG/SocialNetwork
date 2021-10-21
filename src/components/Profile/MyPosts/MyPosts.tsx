import React from 'react';
import s from './MyPosts.module.css';
import {MyPostsPropsType} from './MyPostsContainer';
import {Post} from './Posts/Post';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
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
                <Field component={Textarea} name={'newPostText'} placeholder={'Enter post text...'}
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
    console.log('Render!')

    const onAddPost = (values: MyPostFormDataType) => {
        // console.log(formData)
        props.addPost(values.newPostText)
    }

    const postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>

            <AddNewPostFormRedux onSubmit={onAddPost}/>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
})


/*

// export class MyPosts extends React.PureComponent<MyPostsPropsType> {


export class MyPosts extends React.Component<MyPostsPropsType> {
    shouldComponentUpdate(nextProps: Readonly<MyPostsPropsType>, nextState: Readonly<{}>, nextContext: any): boolean {
        return nextProps !== this.props || nextState !== this.state
    }

    render() {
        console.log('Render!')
        const onAddPost = (values: MyPostFormDataType) => {
            // console.log(formData)
            this.props.addPost(values.newPostText)
        }

        const postsElements = this.props.posts.map(p => <Post key={p.id} message={p.message}
                                                              likesCount={p.likesCount}/>)

        return (
            <div className={s.postsBlock}>
                <h3>My posts</h3>

                <AddNewPostFormRedux onSubmit={onAddPost}/>

                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        )
    }
}

*/
