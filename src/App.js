import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';

import { fetchArticles } from './utils/api';
import ArticlesList from './pages/homePage/ArticleList';
import ArticleBlock from './pages/articlePage/ArticleBlock';
import ArticlesError from './pages/articlesError/ArticlesError';

function App() {
  const [block, setBlock] = useState(false);

  const refresh = () => {
    setBlock(true);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (block) {
      dispatch(fetchArticles());
      setBlock(false);
    }
    const interval = setInterval(() => {
      setBlock(true);
    }, 60000);

    return () => clearInterval(interval);
  }, [dispatch, refresh]);

  useEffect(() => {
    dispatch(fetchArticles());
  }, []);

  return (
    <Router>
      <Container className="main my-4 p-0">
        <h1 className="title">Hacker News for Avito</h1>
        <Switch>
          <Route exact path="/">
            <ArticlesList refresh={refresh} />
          </Route>
          <Route path="/article/:id">
            <ArticleBlock />
          </Route>
          <Route path="*">
            <ArticlesError />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
