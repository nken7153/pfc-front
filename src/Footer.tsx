import { AppBar } from "@mui/material";
import React from "react";

function Footer(): JSX.Element {
  return (
    <AppBar
      color="primary"
      sx={{ top: "auto", bottom: 0, height: 48 }}
    ></AppBar>
  );
}
export default Footer;
