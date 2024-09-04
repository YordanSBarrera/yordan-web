import { Box, Button, Grid, Typography } from "@mui/material";

const Projects = () => {
  return (
    <Box id="projects" sx={{ mb: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Proyectos
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 2, backgroundColor: "#e9e9e9", borderRadius: 1 }}>
            <Typography variant="h5" component="h3">
              Proyecto 1
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              Descripción breve del proyecto.
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Ver más
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 2, backgroundColor: "#e9e9e9", borderRadius: 1 }}>
            <Typography variant="h5" component="h3">
              Proyecto 2
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              Descripción breve del proyecto.
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Ver más
            </Button>
          </Box>
        </Grid>
        ...
      </Grid>
    </Box>
  );
};
export default Projects;
