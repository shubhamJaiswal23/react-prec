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
  const userName = 'Shubham Jaiswal';

  const displayName = () => {
    console.log(userName);
  };

  return (
    <section className="booklist">
      {/* <EventExample /> */}
      {books.map((book, index) => {
        return <Book {...book} key={index} displayName={displayName} />;
      })}
    </section>
  );
};

//Events Example in React
// const EventExample = () => {
//   return (
//     <section>
//       <h1>Typical Form</h1>
//       <form>
//         <input
//           type="text"
//           style={{ margin: '1rem 0' }}
//           onChange={(e) => console.log(e.target.value)}
//           name="user_input"
//         />
//         <button
//           type="submit"
//           onClick={(e) => {
//             e.preventDefault();
//             console.log('Form Submitted');
//           }}
//         >
//           Submit
//         </button>
//         <div>
//           <button type="button" onClick={() => alert('I got clicked')}>
//             Click Me
//           </button>
//         </div>
//       </form>
//     </section>
//   );
// };

//create a  Book
const Book = (props) => {
  console.log(props);
  const { img, title, author, displayName } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <button onClick={displayName}>Show Title</button>
      <h4>{author}</h4>
    </article>
  );
};

//render the BookList Component in 'root' div using createRoot API
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
