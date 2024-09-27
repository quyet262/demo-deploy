import axios from 'axios';

// Action Types
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const ADD_POST = 'ADD_POST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const UPDATE_POST = 'UPDATE_POST';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';

// Base API URL
const API_URL = '  http://localhost:3001/post';

// Action Creators
export const fetchPosts = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_POSTS });
        try {
            const response = await axios.get(API_URL);
            dispatch({ type: FETCH_POSTS_SUCCESS, payload: response.data });
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };
};

export const addPost = (post) => {
    return async (dispatch) => {
        dispatch({ type: ADD_POST });
        try {
            const response = await axios.post(API_URL, post);
            dispatch({ type: ADD_POST_SUCCESS, payload: response.data });
        } catch (error) {
            console.error('Error adding post:', error);
        }
    };
};

export const updatePost = (id, post) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_POST });
        try {
            const response = await axios.put(`${API_URL}/${id}`, post);
            dispatch({ type: UPDATE_POST_SUCCESS, payload: response.data });
        } catch (error) {
            console.error('Error updating post:', error);
        }
    };
};
