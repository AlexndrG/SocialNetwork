import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {StoreContext} from '../../../StoreContext';


export const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    const state = store.getState()

                    const addPost = () => {
                        store.dispatch(addPostActionCreator())
                    }

                    const onPostChange = (text: string) => {
                        store.dispatch(updateNewPostTextActionCreator(text))
                    }

                    return (
                        <MyPosts
                            addPost={addPost}
                            updateNewPostText={onPostChange}
                            posts={state.profilePage.posts}
                            newPostText={state.profilePage.newPostText}/>
                    )
                }
            }
        </StoreContext.Consumer>
    )
}