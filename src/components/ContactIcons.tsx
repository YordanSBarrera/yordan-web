import { Box, Link, Stack } from "@mui/material";
import emailW from "../assets/icons/email-2.svg";
import githubW from "../assets/icons/github-2.svg";
import linkedinW from "../assets/icons/linkedin-2.svg";

type ContactIconsProps = {
  heightProps?: string;
};

const ContactIcons = ({ heightProps = "auto" }: ContactIconsProps) => {
  return (
    <Stack
      alignItems={"baseline"}
      direction={"row"}
      justifyContent={"center"}
      spacing={2}
      mt={2}
      height={heightProps}
    >
      <Link href="mailto:yordansaldana8@gmail.com">
        <Box component="img" src={emailW} alt="email" sx={{ height: "35px" }} />
      </Link>

      <Link href="https://github.com/YordanSBarrera" target="_blank" mt={2}>
        <Box
          component="img"
          src={githubW}
          alt="github"
          sx={{ height: "35px" }}
        />
      </Link>

      <Box alignItems={"baseline"}>
        <Link
          href="https://www.linkedin.com/in/yordan-salda%C3%B1a-188619314/"
          target="_blank"
        >
          <Box
            component="img"
            src={linkedinW}
            alt="linkedin"
            sx={{ height: "35px" }}
          />
        </Link>
      </Box>
    </Stack>
  );
};

export default ContactIcons;
