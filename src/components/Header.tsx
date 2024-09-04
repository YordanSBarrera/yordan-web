import { Box, Button, Typography } from "@mui/material";

const Header = () => {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          py: 5,
          backgroundColor: "#0073e6",
          color: "#fff",
          borderRadius: 1,
          mb: 4,
        }}
      >
        <Typography variant="h2" component="h1">
          Hola, soy Yordan
        </Typography>
        <Typography variant="h5" component="p" sx={{ mt: 2 }}>
          Frontend Developer
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          href="#projects"
          sx={{ mt: 3 }}
        >
          Ver mis proyectos
        </Button>
      </Box>
    </>
  );
};

export default Header;
