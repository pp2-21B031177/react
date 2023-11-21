import './App.css'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from './data.json';

const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [articles, setArticles] = useState(data.articles);

  useEffect(() => {
    const filteredArticles = data.articles.filter(
      (article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.authors.some((author) => author.toLowerCase().includes(searchTerm.toLowerCase())) ||
        article.keywords.some((keyword) => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    setArticles(filteredArticles);
  }, [searchTerm]);

  const handleSort = () => {
    setArticles([...articles].reverse());
  };

  return (
    <div className='wrapper'>
        <h1>Here is the list of all the available articles that you can read</h1>
        <div className='search'>
            <input className='search-bar'
                type="text"
                placeholder="Search by title, author, or keyword"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSort} className='sort-button'>Sort</button>
        </div>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <span className='ul-elem'><Link to={`/article/${article.id}`}>{article.title}</Link></span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainPage;
