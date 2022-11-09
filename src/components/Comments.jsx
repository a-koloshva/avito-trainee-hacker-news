import React, { useState, useEffect } from 'react';

import { getComments } from '../utils/api';
import ShowCommentsButton from './ShowCommentsButton';
import SubComments from './SubComments';

const Comments = ({ comment }) => {
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    if (showComments) {
      getComments(comment.kids, setComments);
    }
  }, [showComments, comment.kids]);

  return (
    <div className="comments-block">
      <div className="text-secondary">
        <span className="comments-block-by">{comment.by}</span>
        <span className="comments-block-date">
          {new Date(comment.time * 1000).toLocaleTimeString()}
        </span>
      </div>
      <p dangerouslySetInnerHTML={{ __html: comment.text }} />
      <ShowCommentsButton setShowComments={setShowComments} kids={comment.kids} />
      {comments !== undefined &&
        comments.length !== 0 &&
        comments.map((com) => <SubComments comment={com} key={com.id} />)}
    </div>
  );
};

export default Comments;
