//create a  Book
const Book = (props) => {
  //   console.log(props);
  const { img, title, author, number } = props;

  return (
    <article className="book">
      <span>#{number + 1}</span>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <h4>{author}</h4>
    </article>
  );
};

export default Book;
