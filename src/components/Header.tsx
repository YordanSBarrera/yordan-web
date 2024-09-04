import { Button, Stack, StackProps, Typography } from "@mui/material";

type HeaderProps = { stackProps?: StackProps };
const Header = ({ stackProps }: HeaderProps) => {
  return (
    <Stack
      textAlign="center"
      color="#fff"
      borderRadius="1"
      bgcolor="#0073e6"
      {...stackProps}
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
    </Stack>
  );
};

export default Header;
