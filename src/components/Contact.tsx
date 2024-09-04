import { Box, Link, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Box id="contact" sx={{ mb: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Contacto
      </Typography>
      <Typography variant="body1">
        Puedes contactarme a través de las siguientes plataformas:
      </Typography>
      <ul>
        <li>
          Email:{" "}
          <Link href="mailto:yordansaldana8@gmail.com">
            yordansaldana8@gmail.com
          </Link>
        </li>
        <li>
          LinkedIn:{" "}
          <Link
            href="https://www.linkedin.com/in/yordan-salda%C3%B1a-188619314/"
            target="_blank"
          >
            www.linkedin.com/in/yordan-salda%C3%B1a-188619314/
          </Link>
        </li>
        <li>
          GitHub:{" "}
          <Link href="https://github.com/YordanSBarrera" target="_blank">
            github.com/YordanSBarrera
          </Link>
        </li>
      </ul>
    </Box>
  );
};
export default Contact;
