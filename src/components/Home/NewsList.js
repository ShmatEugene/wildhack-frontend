import React from 'react';
import NewsListItem from './NewsListItem';

const NewsList = ({ news, length = -1 }) => {
  function renderNews(news) {
    return news.map((post, index) => {
      if (length === -1) {
        return <NewsListItem key={post._id} data={post} />;
      } else if (index < length) {
        return <NewsListItem key={post._id} data={post} />;
      }
    });
  }
  return <div className="home-news__news-list news-list">{news ? renderNews(news) : null}</div>;
};

export default NewsList;
