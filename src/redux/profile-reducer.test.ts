import {addPost, deletePost, PostsDataType, ProfileDataType, profileReducer} from './profile-reducer';

const state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It\'s my first post!', likesCount: 20},
        {id: 3, message: 'Blabla', likesCount: 777},
        {id: 4, message: 'Dada', likesCount: 777},
        {id: 5, message: 'Yo, yo, yo!!!', likesCount: 777}
    ] as Array<PostsDataType>,
    profile: {} as ProfileDataType,
    status: '',
}


it('New post should be added', () => {
    // 1. test data
    const action = addPost('New post!')

    // 2. action
    const newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts.length).toBe(6)
})

it('Message of new post should be correct', () => {
    // 1. test data
    const action = addPost('New post!')

    // 2. action
    const newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts[0].message).toBe('New post!')
})

it('Post should be deleted', () => {
    // 1. test data
    const action = deletePost(1)

    // 2. action
    const newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts.length).toBe(4)
})

it('Post should not be deleted if wrong Id', () => {
    // 1. test data
    const action = deletePost(12345)

    // 2. action
    const newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts.length).toBe(5)
})
