"use client";
import { Container, Stack, Typography, Box } from "@mui/material";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { item: "Home", path: "/" },
  { item: "News", path: "/news" },
  { item: "Contact", path: "/contact" },
  { item: "About", path: "/about" },
  { item: "Login", path: "/login" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <Box sx={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", py: 2 }}>
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography>Logo</Typography>
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
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
