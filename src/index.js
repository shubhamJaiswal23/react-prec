//index.js -> This file is a JavaScript Entry Point.

//import React and ReactDOM from create-react-app node module
import React from 'react';
import ReactDOM from 'react-dom/client';

//create our first functional Component
const Greeting = () => {
  return <h1>Hello from the first React Component.</h1>;
};

//What is happening under the hood when we create a function component.

// const Greeting = () => {
//   return React.createElement('h1', {}, 'Vicky Jaiswal');
// };

// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'Shubham Jaiswal')
//   );
// };

//create root using root API
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting />);
