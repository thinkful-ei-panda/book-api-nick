import React from 'react';
import BookListing from '../BookListing/BookListing';
import './BookList.css';

function BookList(props) {
  const error = props.error
    ? <div className="error">{props.error}</div>
    : "";

  return (
    <ul className="book-list">
      {error}
      <BookListing />
    </ul>
  )
}

export default BookList;