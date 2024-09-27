import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePost } from '../redux/action';
import { useParams, useNavigate } from 'react-router-dom';
const EditPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);
    const post = posts.find((p) => p.id === parseInt(id));

    const [title, setTitle] = useState(post?.title || '');
    const [content, setContent] = useState(post?.body || '');

    useEffect(() => {
        if (!post) {
            navigate('/');
        }
    }, [post, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updatePost(id, { title, body: content }));
        alert('Post updated successfully!');
        navigate('/');
    };

    return (
        <div className="edit-post-container">
            <h1 className="edit-post-title">Edit Post</h1>
            <form className="edit-post-form" onSubmit={handleSubmit}>
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
                <button type="submit" className="save-post-btn">Save</button>
            </form>
        </div>
    );
};

export default EditPost;
