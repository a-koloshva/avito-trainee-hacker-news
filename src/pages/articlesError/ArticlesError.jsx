import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ArticlesError = () => {
  return (
    <div className="articles-error">
      <h2>Page Not Found</h2>
      <p>Are you sure the website URL is correct?</p>
      <Link to="/">
        <Button variant="secondary" className="p-2">
          Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default ArticlesError;
