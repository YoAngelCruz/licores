import React from "react";
import '../styles/Like.css';
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

function ReactionsComponent() {
  return (
    <div class="reactions">
      <div class="reaction reaction-like"></div>
      <div class="reaction reaction-love">
      <button onClick={(e) => {
                e.preventDefault();
                saveLike(e, 1)

            }
            } >
                
            </button>
      </div>
      <div class="reaction reaction-haha"></div>
      <div class="reaction reaction-wow"></div>
      <div class="reaction reaction-sad"></div>
      <div class="reaction reaction-angry"></div>
    </div>
  );
}

export default ReactionsComponent;