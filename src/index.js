//BookList Project
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { books } from './books';
import Book from './Book';

//create a BookList
const BookList = () => {
  return (
    <>
      <h1>Amazon Best Sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />;
        })}
      </section>
    </>
  );
};

//render the BookList Component in 'root' div using createRoot API
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
