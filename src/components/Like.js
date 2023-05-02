import React, { useState } from 'react';
import "../styles/Like.css"

function LikeButton() {
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);
    return (
        <div className="like-button-container">
            <button
                className={`like-button ${liked ? 'liked' : ''}`}
                onClick={() => {
                    setLikes(likes + 1);
                    setLiked(true);
                }}
            >
                {likes} Likes
            </button>
        </div>
    );
}
export default LikeButton