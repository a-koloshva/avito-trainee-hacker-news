import React from 'react';

const ShowCommentsButton = ({ setShowComments, kids }) => {
  const openSubComments = () => {
    setShowComments((sub) => !sub);
  };

  return (
    kids !== undefined &&
    kids.length !== 0 && (
      <button className="answers-button" onClick={openSubComments}>
        Answers: {kids.length}
      </button>
    )
  );
};

export default ShowCommentsButton;
