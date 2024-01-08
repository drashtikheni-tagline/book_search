import { TextField } from "@mui/material";
import React from "react";

type BInputProps = React.ComponentProps<typeof TextField>;

const BInput: React.FC<BInputProps> = (props) => {
  return (
    <div>
      <TextField {...props} />
    </div>
  );
};

export default BInput;
