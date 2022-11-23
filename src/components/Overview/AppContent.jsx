import React from "react";
import { Box } from "@mui/material";
import AppContentItem from "./AppContentItem";

const contentArray = [
  {
    title: "Get Things Done",
    desc: "Lightweight but powerful source code editor which runs on your desktop apps",
    img: "/1.jpg",
  },
  {
    title: "Productivity Is Brilliant",
    desc: "Lightweight but powerful source code editor which runs on your desktop apps",
    img: "/2.jpg",
  },
  {
    title: "Fast Development",
    desc: "Lightweight but powerful source code editor which runs on your desktop apps",
    img: "/3.jpg",
  },
];

const AppContent = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100%"
      width="100%"
      justifyContent="center"
      bgcolor="#fbf2f2"
    >
      {contentArray.map((content, index) => (
        <AppContentItem
          key={index}
          title={content.title}
          desc={content.desc}
          img={content.img}
          swap={index % 2 == 0}
        />
      ))}
    </Box>
  );
};

export default AppContent;
