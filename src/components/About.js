import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        height="60vh"
      >
        <Typography
          sx={{ fontFamily: "fantasy" }}
          variant="h4"
          marginTop="20px"
        >
          This is a CRUD Application
        </Typography>
        <Typography sx={{ fontFamily: "fantasy" }} variant="h5">
          By MERN STACK
        </Typography>
      </Box>
    </div>
  );
};

export default About;
