import { CircularProgress, StackProps } from "@mui/material";
import React from "react";
import BStack from "./BStack";

interface BLoaderProps extends StackProps {}

const BLoader: React.FC<BLoaderProps> = (props) => {
  return (
    <BStack {...props}>
      <CircularProgress />
    </BStack>
  );
};

export default BLoader;
