import React from 'react';
import { NavLink } from 'react-router-dom';
import placeholder from '../../assets/img/post-placeholder.jpg';

const NewsListItem = ({ data }) => {
  return (
    <div className="news-list__item">
      <div className="news-list__img">
        <img src={data.thumbnailLink ? data.thumbnailLink : placeholder} alt="news" />
      </div>
      <div className="news-list__content">
        <h3 className="news-list__title">{data.title ? data.title : ''}</h3>
        <div className="news-list__date">{data.published ? data.published : ''}</div>
        <p className="news-list__text">{data.text ? data.text : ''}</p>
        {data._id && (
          <NavLink to={`/news/${data._id}`} className="news-list__link">
            подробнее
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default NewsListItem;
