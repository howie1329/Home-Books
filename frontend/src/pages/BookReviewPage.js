import {
  Card,
  CardContent,
  List,
  Typography,
  ListItemText,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import BookReview from "../components/BookReview";

function BookReviewPage({ current }) {
  const navigate = useNavigate();
  const book = current;
  return (
    <div className="flex min-w-full justify-center items-center gap-4 mt-10">
      <Card className="p-3 ">
        <CardContent>
          <Typography className="underline" variant="h6">
            {book.title}
          </Typography>
          <Typography variant="subtitle2">Author: {book.author}</Typography>
          <Typography variant="subtitle2">Cost: ${book.cost}</Typography>
          <List>
            Tags:
            {book.tags.map((item) => (
              <ListItemText>{item}</ListItemText>
            ))}
          </List>
        </CardContent>
      </Card>
      <div className="flex flex-col gap-4">
        <Card>
          <CardContent>
            <Typography>What People Are Saying:</Typography>
            <List>
              {book.reviews.map((item) => (
                <>
                  <ListItemText className="underline">
                    {item.title}
                  </ListItemText>
                  <ListItemText>{item.body}</ListItemText>
                </>
              ))}
            </List>
          </CardContent>
        </Card>
        <BookReview id={book._id} book={book} />
      </div>
    </div>
  );
}

export default BookReviewPage;
