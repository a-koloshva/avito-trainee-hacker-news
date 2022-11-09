import React from 'react';
import { Button, Container, ListGroup } from 'react-bootstrap';
import { ArrowClockwise } from 'react-bootstrap-icons';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader';
import ArticleItem from './ArticleItem';

const ArticlesList = ({ refresh }) => {
  const articles = useSelector((state) => state.articles.articles);

  return (
    <Container className="">
      <Button variant="light" className="p-2 mb-2" onClick={() => refresh()}>
        <ArrowClockwise color="black" size={32} />
      </Button>
      <ListGroup variant="flush">
        {!articles[0] ? (
          <Loader />
        ) : (
          articles.map((article, index) => {
            if (!article) {
              return article;
            }
            return (
              <Link
                to={`/article/${article.id}`}
                key={article.id}
                className="text-secondary mb-1 underline">
                <ListGroup.Item variant="light" action className="rounded">
                  <ArticleItem {...article} index={index} />
                </ListGroup.Item>
              </Link>
            );
          })
        )}
      </ListGroup>
    </Container>
  );
};

export default ArticlesList;
