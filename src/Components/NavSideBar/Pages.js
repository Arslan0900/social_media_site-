import { Box, Typography } from "@mui/material";
import React from "react";
import { SideBar } from "../SideBar";

const Pages = () => {
  return (
    <Box direction="row">
      <SideBar />
      <Box flex={1} >
        <Typography variant="h6" justifyContent={"center"} textAlign="center">I am Pages</Typography>
      </Box>
    </Box>
  );
};

export default Pages;
