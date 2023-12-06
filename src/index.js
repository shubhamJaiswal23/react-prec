import React from 'react';
import ReactDOM from 'react-dom/client';

//Nested Components in React
const Greeting = () => {
  return (
    <div>
      <Name />
      <Message />
    </div>
  );
};

//First Nest Componet
const Name = () => <h1>Shubham Jaiswal</h1>;

//Second Nest Component
const Message = () => {
  return <p>Hello, how are you?</p>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting />);
