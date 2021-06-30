import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Posts/Post';
import {PostsDataType} from '../../../redux/state';

type PropsType = {
    posts: Array<PostsDataType>
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

export const MyPosts = (props: PropsType) => {
    const postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    /*
        ссылка на статью про ссылку Ref в TypeScript:
        "React Refs with TypeScript"
        https://medium.com/@martin_hotell/react-refs-with-typescript-a32d56c4d315
    */

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        props.addPost()
        // props.updateNewPostText('')
        newPostElement.current?.focus()     // это аналогично: newPostElement.current && newPostElement.current.focus()
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            props.updateNewPostText(newPostElement.current.value)
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
                    <button onClick={addPost}>Add post</button>
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