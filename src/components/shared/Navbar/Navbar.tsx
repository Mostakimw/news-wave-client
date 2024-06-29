"use client";
import {
  Container,
  Stack,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const navItems = [
  { item: "Home", path: "/" },
  { item: "News", path: "/news" },
  { item: "Contact", path: "/contact" },
  { item: "About", path: "/about" },
  { item: "Login", path: "/login" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleClose = () => {
    setToggle(false);
  };

  return (
    <Box sx={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", py: 2 }}>
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap={4}
        >
          <Typography>Logo</Typography>
          {/* large devices menu */}

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Stack direction="row" gap={3}>
              {navItems.map((item, index) => (
                <Typography
                  key={index}
                  component={Link}
                  href={item.path}
                  sx={{
                    textDecoration: "none",
                    color: pathname === item.path ? "primary.main" : "#000000",
                    fontSize: 16,
                    "&:hover": {
                      color: "primary.main",
                      transition: "ease-in-out 0.4s",
                    },
                  }}
                >
                  {item.item}
                </Typography>
              ))}
            </Stack>
          </Box>

          {/* hamburger icon */}
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <IconButton size="large" onClick={handleToggle}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Stack>

        {/* small devices menu */}
        <Drawer anchor="bottom" open={toggle} onClose={handleClose}>
          <Box sx={{ width: "100%", p: 2 }}>
            <List>
              {navItems.map((item, index) => (
                <ListItem
                  key={index}
                  component={Link}
                  href={item.path}
                  onClick={handleClose}
                >
                  <ListItemText
                    primary={item.item}
                    sx={{
                      color:
                        pathname === item.path ? "primary.main" : "#000000",
                      "&:hover": {
                        color: "primary.main",
                        transition: "ease-in-out 0.4s",
                      },
                      textAlign: "center",
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Container>
    </Box>
  );
};

export default Navbar;
