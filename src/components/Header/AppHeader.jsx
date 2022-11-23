import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Tabs,
  Tab,
  Link,
  Button,
  Typography,
} from "@mui/material";
import ApiIcon from "@mui/icons-material/Api";

const navLinks = ["Products", "Solutions", "Enterprise", "Pricing"];

const AppHeader = () => {
  return (
    <AppBar position="sticky" sx={{ bgcolor: "transparent", boxShadow: "0" }}>
      <Toolbar>
        <Box sx={{ display: "flex", width: "100%", alignItems: "center" }}>
          <ApiIcon sx={{ color: "black" }} />
          <Box>
            <Tabs component={Link} sx={{ textDecoration: "none" }}>
              {navLinks.map((navLink, index) => (
                <Tab
                  sx={{
                    fontWeight: "bold",
                    textDecoration: "none",
                    ":hover": {
                      textDecoration: "underline",
                      textUnderlineOffset: "6px",
                      color: "maroon",
                    },
                  }}
                  key={index}
                  label={navLink}
                />
              ))}
            </Tabs>
          </Box>
          <Box display="flex" marginLeft={"auto"}>
            <Button
              color="inherit"
              size="small"
              sx={{
                mr: 2,
                color: "black",
                ":hover": {
                  color: "maroon",
                },
              }}
              variant="outlined"
            >
              Talk to Us
            </Button>
            <Button
              size="small"
              color="inherit"
              variant="contained"
              sx={{
                color: "black",
                ":hover": {
                  color: "maroon",
                },
              }}
            >
              Try For Free
            </Button>
          </Box>
        </Box>
      </Toolbar>
      <Box width="100%" height="100vh">
        <video
          width={"100%"}
          height="50%"
          autoPlay
          loop
          muted
          playsInline
          src="/video.mp4"
        />
        <Box
          display="flex"
          width="100%"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
        >
          <Box my={3}>
            <Typography variant="h5" color="black">
              Build Your Software Hassle Free
            </Typography>
            <Typography variant="h6" color="black">
              Top Quality Solutions
            </Typography>
          </Box>
          <Box display="flex" gap={2}>
            <Button
              size="small"
              variant="outlined"
              color="inherit"
              sx={{
                color: "black",
                ":hover": {
                  color: "maroon",
                },
              }}
            >
              Signup with email
            </Button>
            <Button
              color="inherit"
              size="small"
              variant="contained"
              sx={{
                color: "black",
                ":hover": {
                  color: "maroon",
                },
              }}
            >
              Signup with Google
            </Button>
          </Box>
        </Box>
      </Box>
    </AppBar>
  );
};

export default AppHeader;
