import React from 'react';
import BookListing from '../BookListing/BookListing';
import './BookList.css';

function BookList(props) {
  const error = props.error
    ? <div className="error">{props.error}</div>
    : "";

  const bookListings = props.books.map(book => {
    return <BookListing
      title={book.title}
      img={book.img}
      author={book.author}
      price={book.price}
      description={book.description}
      key={book.id}
      link={book.link}
    />
  });

  return (
    <ul className="book-list">
      {error}
      {bookListings}
    </ul>
  )
}

export default BookList;