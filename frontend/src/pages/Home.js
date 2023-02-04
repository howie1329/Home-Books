import React from "react";
import BookListing from "../components/BookListing";

//Home Page
export default function Home({ setCurrentBook }) {
  return (
    <div className="h-screen max-w-full">
      <div className="flex justify-evenly pt-3 gap-2 flex-wrap">
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
        <BookListing
          title="Fiction Books"
          tagFilter="Fiction"
          setCurrentBook={setCurrentBook}
        />
        <BookListing
          title="Fantasy Books"
          tagFilter="fantasy"
          setCurrentBook={setCurrentBook}
        />
        <BookListing
          title="Romance Books"
          tagFilter="romance"
          setCurrentBook={setCurrentBook}
        />
      </div>
    </div>
  );
}
