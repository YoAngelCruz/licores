import React from 'react';
import "../styles/Like.css"
import KafkaService from "../services/kafka.service";

function saveLike(e, status) {

    let data = {
        id: 0,
        status: status
    };

    console.log(JSON.stringify(data));

    KafkaService.reaction("love-reaction");
    e.preventDefault();
}

function LikeButton() {
    return (
        <div className="like-button-container">
            <button onClick={(e) => {
                e.preventDefault();
                saveLike(e, 1)

            }
            } >
                Love
            </button>

        </div>
    );
}
export default LikeButton