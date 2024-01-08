import styled from "@emotion/styled";
import { Button, ButtonProps } from "@mui/material";
import React, { ReactNode } from "react";

const StyledButton = styled(Button)({
  padding: "10px 20px",
});
interface BButtonProps extends ButtonProps {
  children: ReactNode;
}

const BButton: React.FC<BButtonProps> = ({ children, ...props }) => {
  return (
    <StyledButton disableElevation {...props}>
      {children}
    </StyledButton>
  );
};

export default BButton;
