//BookList Project
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//props value of BookList
const firstBook = {
  title: 'Do It Today',
  author: 'Darius Foroux',
  img: './images/Book-1.jpg'
};

const secondBook = {
  title: "Man's Search For Meaning",
  author: 'Victor E. Frankl',
  img: 'https://m.media-amazon.com/images/I/61nTspM+BYL._AC_UY218_.jpg'
};

const thirdBook = {
  title: 'The Richest Man In Babylon',
  author: 'George S. Clason',
  img: 'https://m.media-amazon.com/images/I/71Vs-VNGhXL._AC_UY218_.jpg'
};

//create a BookList
const BookList = () => {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      >
        <p>This is the paragraph in children prop.</p>
        <button>Click Me</button>
      </Book>
      <Book
        img={thirdBook.img}
        title={thirdBook.title}
        author={thirdBook.author}
      />
    </section>
  );
};

//create a  Book
const Book = ({ img, title, author, children }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

//render the BookList Component in 'root' div using createRoot API
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
