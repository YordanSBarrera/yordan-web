import { Stack, StackProps, Typography } from "@mui/material";
import { bgTransparenCard } from "../utils/const";

type WelcomeProps = { stackProps?: StackProps };
const Welcome = ({ stackProps }: WelcomeProps) => {
  return (
    <Stack
      textAlign="center"
      color="#fff"
      borderRadius={2}
      {...stackProps}
      sx={{ id: "home", backgroundColor: bgTransparenCard }}
    >
      <Typography variant="h2" component="h1">
        Hola, soy Yordan
      </Typography>
      <Typography variant="h5" component="p" sx={{ mt: 2 }}>
        Frontend Developer
      </Typography>
    </Stack>
  );
};

export default Welcome;
