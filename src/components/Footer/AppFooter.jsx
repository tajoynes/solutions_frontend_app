import React from "react";
import { Typography, Box, Button } from "@mui/material";

const AppFooter = () => {
  return (
    <Box
      display="flex"
      width="100%"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      p={10}
      gap={5}
    >
      <Typography variant="h3" color="initial">
        Ready For Any Situation
      </Typography>
      <Typography variant="subtitle1">Optimized For Any Team Size</Typography>
      <Box display="flex" gap={3}>
        <Button
          ize="small"
          variant="outlined"
          color="inherit"
          sx={{
            color: "black",
            ":hover": {
              color: "maroon",
            },
          }}
        >
          Try CODE For Free
        </Button>
        <Button
          ize="small"
          variant="contained"
          color="inherit"
          sx={{
            color: "black",
            ":hover": {
              color: "maroon",
            },
          }}
        >
          Talk With Representative
        </Button>
      </Box>
    </Box>
  );
};

export default AppFooter;
