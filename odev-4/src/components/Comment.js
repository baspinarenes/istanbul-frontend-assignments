import React from "react";
import ReactStars from "react-rating-stars-component";

function Comment({ commentList }) {
  return (
    <div>
      <ul>
        {commentList.map((comment, index) => (
          <li key={index}>
            <span>{comment.text}</span>
            <ReactStars
              value={comment.rating}
              edit={false}
              count={5}
              size={34}
              activeColor="#ffd700"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Comment;
