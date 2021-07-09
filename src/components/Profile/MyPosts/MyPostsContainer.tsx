import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {ActionsTypes, StateType} from '../../../redux/store';
//import {StoreContext} from '../../../StoreContext';


// export const MyPostsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//
//                     const state = store.getState()
//
//                     const addPost = () => {
//                         store.dispatch(addPostActionCreator())
//                     }
//
//                     const onPostChange = (text: string) => {
//                         store.dispatch(updateNewPostTextActionCreator(text))
//                     }
//
//                     return (
//                         <MyPosts
//                             addPost={addPost}
//                             updateNewPostText={onPostChange}
//                             posts={state.profilePage.posts}
//                             newPostText={state.profilePage.newPostText}/>
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

const mapStateToProps = (state: StateType) => {
    return {
        posts:state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
