import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchArticles = createAsyncThunk('articles/fetchArticles', async () => {
  try {
    const response = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json');
    const articles = await response.json();
    const art = await Promise.all(articles.slice(0, 100).map(getArticle));
    return art;
  } catch (err) {
    console.error('API error:', err);
  }
});

const getArticle = async (id) => {
  try {
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
    const article = await response.json();
    return article;
  } catch (err) {
    console.error('API error:', err);
  }
};

export async function getComments(kids, setData) {
  try {
    const comments = kids.map((comment) => {
      return axios.get(`https://hacker-news.firebaseio.com/v0/item/${comment}.json`);
    });

    Promise.all(comments).then((response) => {
      setData(response.map((res) => res.data));
    });
  } catch (err) {
    console.error('API error:', err);
  }
}

export function fetchArticle(id, setData) {
  axios
    .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    .then((res) => {
      setData(res.data);
    })
    .catch((err) => {
      console.error('API error:', err);
    });
}
