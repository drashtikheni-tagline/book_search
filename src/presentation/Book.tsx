import React, { memo } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Book } from "../types/book.type";

const BookDetails: React.FC<{ book: Book }> = ({ book }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h3">
          {book.title}
        </Typography>
        <Typography variant="body1" component="p">
          Authors: {book.author_name?.join(", ") || "Not Provided"}
        </Typography>
        <Typography variant="body1" component="p">
          First Published: {book.first_publish_year || "Not Provided"}
        </Typography>
        <Typography variant="body1" component="p">
          ISBN: {book.isbn?.join(", ") || "Not Provided"}
        </Typography>
        <Typography variant="body1" component="p">
          Number of Pages: {book.number_of_pages_median || 0}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default memo(BookDetails);
