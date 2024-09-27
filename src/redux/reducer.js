import {
    FETCH_POSTS,
    FETCH_POSTS_SUCCESS,
    ADD_POST_SUCCESS,
    UPDATE_POST_SUCCESS
} from './action';

const initialState = {
    posts: [],
    loading: false,
};

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return { ...state, loading: true };
        case FETCH_POSTS_SUCCESS:
            return { ...state, loading: false, posts: action.payload };
        case ADD_POST_SUCCESS:
            return { ...state, posts: [...state.posts, action.payload] };
        case UPDATE_POST_SUCCESS:
            return {
                ...state,
                posts: state.posts.map(post =>
                    post.id === action.payload.id ? action.payload : post
                ),
            };
        default:
            return state;
    }
};
