import React from "react";
import Container from "@mui/material/Container";
// import Image from "next/image";
// import Link from "@/src/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const footer = () => {
  return (
    <div>
      <Paper
        sx={{ marginTop: "calc(10% + 60px)", bottom: 0 }}
        component="footer"
        square
        variant="outlined"
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: "flex",
              my: 1,
            }}
          >
            {/* <Link href="/">
              <Image
                priority
                src="/Logo.svg"
                width={75}
                height={30}
                alt="Logo"
              />
            </Link> */}
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: "flex",
              mb: 2,
            }}
          >
            <Typography variant="caption" color="initial">
              Copyright © Izzath Isharah
            </Typography>
          </Box>
        </Container>
      </Paper>
    </div>
  );
};

export default footer;
