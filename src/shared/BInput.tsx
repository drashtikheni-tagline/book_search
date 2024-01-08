import { TextField, styled, TextFieldProps } from "@mui/material";
import React from "react";

const StyledTextField = styled(TextField)({
  "& .MuiInputBase-input": {
    padding: 10,
  },
});

type BInputProps = TextFieldProps;

const BInput: React.FC<BInputProps> = (props) => {
  return <StyledTextField {...props} />;
};

export default BInput;
