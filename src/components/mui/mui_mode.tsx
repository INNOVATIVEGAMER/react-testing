import { Typography, useTheme } from "@mui/material";
import React from "react";

interface Props {}

const MuiMode = (props: Props) => {
  const theme = useTheme();
  return <Typography component="h1">{theme.palette.mode} mode</Typography>;
};

export default MuiMode;
