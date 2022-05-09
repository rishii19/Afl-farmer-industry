import React from 'react';
import './Blog.css';

const Blog = ({ imgUrl, date, text }) => (
  <div className="blogging">
    <div className="blogging-image">
      <img src={imgUrl} alt="blogging_image" />
    </div>
    <div className="blogging-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>Read Full Article</p>
    </div>
  </div>
);

export default Blog;
