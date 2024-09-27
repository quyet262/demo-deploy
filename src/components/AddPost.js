import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/action';
import { useNavigate } from 'react-router-dom';

const AddPost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addPost({ title, body: content }));
        alert('Post added successfully!');
        navigate('/');
    };

    return (
        <div className="add-post-container">
            <h1 className="add-post-title">New Post</h1>
            <form className="add-post-form" onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <label>Content</label>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
                <button type="submit" className="add-post-btn">Add</button>
            </form>
        </div>
    );
};

export default AddPost;
