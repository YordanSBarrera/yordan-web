import { Box, Grid, Typography } from "@mui/material";

const Skills = () => {
  return (
    <Box id="skills" sx={{ mb: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Habilidades
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
          <Typography variant="body1">HTML5 & CSS3</Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <Typography variant="body1">JavaScript (ES6+)</Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <Typography variant="body1">React.js</Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <Typography variant="body1">Responsive Design</Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <Typography variant="body1">Git & GitHub</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Skills;
