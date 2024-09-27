import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/action';
import { Link } from 'react-router-dom';
const PostList = () => {
    const dispatch = useDispatch();
    const { posts, loading } = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="post-list-container">
            <h1 className="post-list-title">Post List</h1>
            <Link to="/add" className="add-post-btn">
                <i className="fas fa-plus"></i> Add New Post
            </Link>
            <ul className="post-list">
                {posts.map(post => (
                    <li key={post.id} className="post-item">
                        <div className="post-item-title">
                            {post.title}
                        </div>
                        <div className="post-item-body">
                            {post.body}
                        </div>
                        <div className="post-item-actions">
                            <Link to={`/edit/${post.id}`}>
                                <button>
                                    <i className="fas fa-edit"></i> Edit
                                </button>
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;
