import React from "react";
import BookListing from "../components/BookListing";

//Home Page
export default function Home({ setCurrentBook }) {
  return (
    <div>
      <BookListing
        title="Hot Books !!!"
        tagFilter="hot"
        setCurrentBook={setCurrentBook}
      />
      <BookListing
        title="Top NonFiction Books !!!"
        tagFilter="nonfiction"
        setCurrentBook={setCurrentBook}
      />
    </div>
  );
}
