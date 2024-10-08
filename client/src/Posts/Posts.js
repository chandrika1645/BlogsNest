import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import './Posts.css';

const Posts = ({ posts}) => {
    const navigate = useNavigate();

    const handlePostClick = (post) => {
        navigate(`/posts/${post.id}`, { state: { post } });
    };

    return (
        <div className="posts-container">
            {posts.length === 0 ? (
                <p>No posts yet. Start writing your first post!</p>
            ) : (
                posts.map((post) => (
                    <div key={post.id} className="post-card" onClick={() => handlePostClick(post)}>
                        <h3>{post.title}</h3>
                        <p className='post-content'>{post.content}</p>
                        <p className='authorName'>{`@${post.authorname}`}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default Posts;
