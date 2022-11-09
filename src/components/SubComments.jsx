import React, { useEffect, useState } from 'react';

import { getComments } from '../utils/api';
import ShowCommentsButton from './ShowCommentsButton';

const SubComments = ({ comment }) => {
  const [subComments, setSubComments] = useState([]);
  const [showSubComments, setShowSubComments] = useState(false);

  useEffect(() => {
    if (showSubComments) {
      getComments(comment.kids, setSubComments);
    }
  }, [comment.kids, showSubComments]);

  return (
    <div className="subcomments-block">
      <div className="text-secondary">
        <span className="subcomments-block-by">{comment.by}</span>
        <span className="subcomments-block-date">
          {new Date(comment.time * 1000).toLocaleTimeString()}
        </span>
        <span className="subcomments-block-delete">{comment.deleted && '(deleted)'}</span>
      </div>
      <p dangerouslySetInnerHTML={{ __html: comment.text }} />
      <ShowCommentsButton setShowComments={setShowSubComments} kids={comment.kids} />
      {subComments !== undefined &&
        subComments.length !== 0 &&
        subComments.map((com) => <SubComments comment={com} key={com.id} />)}
    </div>
  );
};

export default SubComments;
