import React from 'react';
import { useParams } from 'react-router-dom';
import data from './data.json';
import './App.css'
const ArticlePage = () => {
  const { id } = useParams();
  const article = data.articles.find((a) => a.id === parseInt(id, 10));

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className='wrapper'>
      <h1>{article.title}</h1>
      <h3>Authors: {article.authors.join(', ')}</h3>
      <h3>Keywords: {article.keywords.join(', ')}</h3>
      <h3>{article.body}</h3>
    </div>
  );
};

export default ArticlePage;
