import { Button, ButtonProps } from "@mui/material";
import React, { ReactNode } from "react";

interface BButtonProps extends ButtonProps {
  children: ReactNode;
}

const BButton: React.FC<BButtonProps> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default BButton;
