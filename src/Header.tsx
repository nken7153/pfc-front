import { FitnessCenter } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

function Header(): JSX.Element {
  // ハンバーガーメニューの制御
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar position="fixed" color="primary" sx={{ height: "64px " }}>
        <Toolbar>
          <Box alignItems={"center"} sx={{ flexGrow: 1, display: "flex" }}>
            <Button color="inherit" to="/" component={RouterLink}>
              <FitnessCenter sx={{ mr: 1 }} fontSize="large" />
              <Typography variant="h5" sx={{ mr: 2 }}>
                PFC計算サイト
              </Typography>
            </Button>
          </Box>
          <IconButton edge="end" onClick={handleOpen} sx={{ display: "flex" }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        PaperProps={{ sx: { width: { sm: "30%" } } }}
        anchor={"right"}
        open={open}
        onClose={handleClose}
      >
        <Link href="/Stuff/Search" sx={{ mr: 1 }} fontSize="large">
          食材検索
        </Link>
      </Drawer>
    </>
  );
}
export default Header;
