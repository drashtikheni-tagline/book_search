import React, { memo } from "react";
import { CardContent } from "@mui/material";
import { Book } from "../types/book.type";
import {
  EMPTY_COUNT,
  JOIN_LITERATURE,
  NOT_PROVIDED,
} from "../constants/index.constant";
import { head } from "../utils/typescript";
import BTypography from "../shared/BTypography";
import BCard from "../shared/BCard";
import BTooltip from "../shared/BTooltip";

const BookDetails: React.FC<{ book: Book }> = ({ book }) => {
  return (
    <BCard variant="outlined">
      <CardContent>
        <BTooltip
          title={book.title}
          arrow
          placement="top-start"
          componentsProps={{
            tooltip: {
              sx: {
                backgroundColor: "primary.main",
                "& .MuiTooltip-arrow": {
                  transform: "none !important",
                  ml: 1,
                  color: "primary.main",
                },
              },
            },
          }}
        >
          <span>
            <BTypography
              variant="h5"
              component="h3"
              sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                mb: 1,
              }}
            >
              {book.title}
            </BTypography>
          </span>
        </BTooltip>
        <BTooltip
          title={book.author_name?.join(JOIN_LITERATURE) || NOT_PROVIDED}
          arrow
          placement="bottom-start"
          componentsProps={{
            tooltip: {
              sx: {
                backgroundColor: "primary.main",
                "& .MuiTooltip-arrow": {
                  transform: "none !important",
                  ml: 1,
                  color: "primary.main",
                },
              },
            },
          }}
        >
          <span>
            <BTypography
              variant="body1"
              component="p"
              color="natural.gray"
              sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                mb: 1,
              }}
            >
              Authors: {book.author_name?.join(JOIN_LITERATURE) || NOT_PROVIDED}
            </BTypography>
          </span>
        </BTooltip>
        <BTypography variant="body2" component="p">
          First Published:{" "}
          <BTypography variant="body2" component="span" fontWeight="600">
            {book.first_publish_year || NOT_PROVIDED}
          </BTypography>
        </BTypography>
        <BTypography variant="body2" component="p">
          ISBN:{" "}
          <BTypography variant="body2" component="span" fontWeight="600">
            {head(book.isbn) || NOT_PROVIDED}
          </BTypography>
        </BTypography>
        <BTypography variant="body2" component="p">
          Number of Pages:{" "}
          <BTypography variant="body2" component="span" fontWeight="600">
            {book.number_of_pages_median || EMPTY_COUNT}
          </BTypography>
        </BTypography>
      </CardContent>
    </BCard>
  );
};

export default memo(BookDetails);
