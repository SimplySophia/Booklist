import React from "react";
import ReactDom from "react-dom/client";

import "./index.css";
const firstBook = {
  author: "Victor Davis Hanson",
  title: "The End Of Everything",
  img: "./images/book-1.jpg",
};
const secondBook = {
  author: "James Clear",
  title: "Atomic Habits",
  img: "./images/book-2.jpg",
};
const thirdBook = {
  author: "The Teacher",
  title: "Freida McFadden",
  img: "./images/book-3.jpg",
};

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        title={firstBook.title}
        author={firstBook.author}
        img={firstBook.img}
      />
      <Book
        title={secondBook.title}
        author={secondBook.author}
        img={secondBook.img}
      />
      <Book
        title={thirdBook.title}
        author={thirdBook.author}
        img={thirdBook.img}
      />
    </section>
  );
};
const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<BookList />);
