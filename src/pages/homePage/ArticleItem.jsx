import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { CalendarEventFill, ChatLeftDotsFill, PersonFill, StarFill } from 'react-bootstrap-icons';

const ArticleItem = ({ title, kids, score, time, by, index }) => {
  return (
    <Container>
      <Row className="item-title border-bottom pb-1">
        {index + 1}. {title}
      </Row>

      <Row className="pt-2">
        <Col className="article-info">
          <span className="article-info__icon">
            <PersonFill />
          </span>
          <span className="article-info__data">{by}</span>
        </Col>
        <Col className="article-info">
          <span className="article-info__icon">
            <StarFill />
          </span>
          <span className="article-info__data">{score}</span>
        </Col>
        <Col className="article-info">
          <span className="article-info__icon">
            <CalendarEventFill />
          </span>
          <span className="article-info__data">{new Date(+time * 1000).toLocaleString()}</span>
        </Col>
        <Col className="article-info">
          <span className="article-info__icon">
            <ChatLeftDotsFill />
          </span>
          <span className="article-info__data">Comments: {kids ? kids.length : 0}</span>
        </Col>
      </Row>
    </Container>
  );
};

export default ArticleItem;
