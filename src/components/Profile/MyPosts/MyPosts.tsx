import React from 'react';
import s from './MyPosts.module.css';
import { MyPostsPropsType } from './MyPostsContainer';
import {Post} from './Posts/Post';


export const MyPosts = (props: MyPostsPropsType) => {
    const postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

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