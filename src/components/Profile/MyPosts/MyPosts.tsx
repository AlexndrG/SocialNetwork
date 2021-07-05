import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Posts/Post';
import {PostsDataType} from '../../../redux/store';

type PropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
    posts: Array<PostsDataType>
    newPostText: string
}

export const MyPosts = (props: PropsType) => {
    const postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const onAddPost = () => {
        props.addPost()
        // props.dispatch({type: 'ADD-POST'})
        // props.dispatch(addPostActionCreator())
        // props.updateNewPostText('')
        newPostElement.current?.focus()     // это аналогично: newPostElement.current && newPostElement.current.focus()
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            props.updateNewPostText(newPostElement.current.value)
            // props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: newPostElement.current.value})
            // props.dispatch(updateNewPostTextActionCreator(newPostElement.current.value))
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        ref={newPostElement}
                        cols={35} rows={5}
                        value={props.newPostText}
                        onChange={onPostChange}
                    />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>

                {postsElements}

                {/*<Post message={posts[0].message} likesCount={posts[0].likesCount}/>*/}
                {/*<Post message={posts[1].message} likesCount={posts[1].likesCount}/>*/}
            </div>
        </div>
    )
}