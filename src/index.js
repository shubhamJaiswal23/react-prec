//BookList Project
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//Array of Books
const books = [
  {
    title: 'Do It Today',
    author: 'Darius Foroux',
    img: './images/Book-1.jpg'
  },
  {
    title: "Man's Search For Meaning",
    author: 'Victor E. Frankl',
    img: 'https://m.media-amazon.com/images/I/61nTspM+BYL._AC_UY218_.jpg'
  },
  {
    title: 'The Richest Man In Babylon',
    author: 'George S. Clason',
    img: 'https://m.media-amazon.com/images/I/71Vs-VNGhXL._AC_UY218_.jpg'
  }
];

//Using Arrays in ReactJS
// const names = ['Shubham', 'Vicky', 'Shivam', 'Anant'];

// const newNames = names.map((name) => {
//   return <h1>{name}</h1>;
// });

// console.log(newNames);

//create a BookList
const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book {...book} key={index} />;
      })}
    </section>
  );
};

//create a  Book
const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <h4>{author}</h4>
    </article>
  );
};

//render the BookList Component in 'root' div using createRoot API
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
