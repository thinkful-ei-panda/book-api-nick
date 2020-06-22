import React from 'react';
import BookListing from '../BookListing/BookListing';
import './BookList.css';

function BookList(props) {
  return (
    <ul class="book-list">
      <BookListing />
    </ul>
  )
}

export default BookList;