import React from "react";
import "../styles/comentarios.css"
import ReactionsComponent from "./reacciones";

function CommentsComponent() {
  return (
    <div class="comments-section">
      <h4>Comments</h4>
      <form>
        <div class="form-group">
          <label for="comment-input">Leave a comment:</label>
          <textarea
            id="comment-input"
            name="comment"
            rows="4"
            placeholder="Write your comment here..."
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div class="comments-list">
        <div class="comment">
          <h5>User1</h5>
          <p>This is a comment.</p>
        </div>
        <div class="comment">
          <h5>User2</h5>
          <p>This is another comment.</p>
        </div>
        <div class="like">
          <ReactionsComponent/>
        </div>
      </div>
    </div>
  );
}

export default CommentsComponent;