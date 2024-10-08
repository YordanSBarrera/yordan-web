import { Box, Card, Typography } from "@mui/material";
import { ReactNode } from "react";

type CardTransparentProps = {
  title: string;
  children: ReactNode;
};

const CardTransparent = ({ title, children }: CardTransparentProps) => {
  const midleTransparent = "rgb(255,255,255,0.3)";
  return (
    <Card
      sx={{
        m: 3,
        bgcolor: midleTransparent,
        color: "whitesmoke",
        width: "fit-content",
        textAlign: "center",
        xs: "100%",
      }}
    >
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Box p={3}>{children}</Box>
    </Card>
  );
};

export default CardTransparent;
