import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { ArrowClockwise, ArrowLeftCircle } from 'react-bootstrap-icons';

import { fetchArticle, getComments } from '../../utils/api';
import Comments from '../../components/Comments';
import Loader from '../../components/Loader';

const ArticleBlock = () => {
  const articles = useSelector((state) => state.articles.articles);
  const urlParams = useParams();
  const [comments, setComments] = useState([]);
  const [singleArticle, setSingleArticle] = useState({});

  const [block, setBlock] = useState(false);

  const refresh = () => {
    setBlock(!block);
  };

  useEffect(() => {
    if (articles !== undefined) {
      let single = articles.find((article) => article.id === +urlParams.id);

      if (single !== undefined) {
        setSingleArticle(articles.find((article) => article.id === +urlParams.id));
      } else {
        fetchArticle(+urlParams.id, setSingleArticle);
      }
    }
  }, [articles, urlParams.id]);

  useEffect(() => {
    if (singleArticle !== undefined && singleArticle.kids !== undefined) {
      getComments(singleArticle.kids, setComments);
    }
  }, [singleArticle, block]);

  return (
    <Container className="p-0">
      <Row>
        <Col xs="auto" sm="auto">
          <Link to="/">
            <Button variant="light" className="p-2">
              <ArrowLeftCircle color="black" size={32} />
            </Button>
          </Link>
        </Col>

        <Col xs={11} sm={11} className="bg-light p-4 rounded">
          <Row>
            <Col>
              <a href={singleArticle.url} className="text-black-50">
                {singleArticle.url}
              </a>
            </Col>
          </Row>

          <Row>
            <Col>
              <p className="block-title">{singleArticle.title}</p>
            </Col>
          </Row>

          <Row xs="auto" className="text-secondary">
            <Col className="font-italic">
              <p>
                by: <i>{singleArticle.by}</i>
              </p>
            </Col>
            <Col>
              <p>
                time: <i>{new Date(+singleArticle.time * 1000).toLocaleString()}</i>
              </p>
            </Col>
          </Row>

          <Row className="border-top pt-3">
            <div className="comments-count">
              <Button variant="light" className="p-2 mr-3" onClick={() => refresh()}>
                <ArrowClockwise color="black" size={24} />
              </Button>
              <span>Comments: {!singleArticle.kids ? 0 : singleArticle.kids.length}</span>
            </div>
          </Row>
          <Row>
            <div>
              {singleArticle.kids !== undefined && comments[0] === undefined ? (
                <Loader />
              ) : (
                comments.map((comment) => <Comments comment={comment} key={comment.id} />)
              )}
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ArticleBlock;
