import {addPost, addPostTC, PostsDataType} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {StateType} from '../../../redux/redux-store';


type MyPostsMapStateToPropsType = {
    posts: Array<PostsDataType>
    // newPostText: string
}

type MyPostsMapDispatchToProps = {
    // addPost: (postText: string) => void
    addPostTC: (postText: string) => void
    // updateNewPostText: (text: string) => void
}

export type MyPostsPropsType = MyPostsMapStateToPropsType & MyPostsMapDispatchToProps


const mapStateToProps = (state: StateType): MyPostsMapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        // newPostText: state.profilePage.newPostText
    }
}
// const mapDispatchToProps = (dispatch: DispatchType): MyPostsMapDispatchToProps => {
//     return {
//         addPost: () => {
//             dispatch(addPostActionCreator())
//         },
//         updateNewPostText: (text: string) => {
//             dispatch(updateNewPostTextActionCreator(text))
//         }
//     }
// }

// export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
/*
export const MyPostsContainer = connect(mapStateToProps,
    // {addPost, updateNewPostText})
    {addPost})
(MyPosts)
*/

export const MyPostsContainer = connect(mapStateToProps,
    // {addPost, updateNewPostText})
    {addPostTC})
(MyPosts)
