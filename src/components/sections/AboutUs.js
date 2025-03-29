import { Container, Typography, Grid, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import PeopleIcon from '@mui/icons-material/People';
import HomeIcon from '@mui/icons-material/Home';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const stats = [
  {
    icon: <PeopleIcon />,
    value: '2000+',
    label: 'Clientes Satisfechos',
  },
  {
    icon: <HomeIcon />,
    value: '3500+',
    label: 'Propiedades Vendidas',
  },
  {
    icon: <LocationCityIcon />,
    value: '15+',
    label: 'Años de Experiencia',
  },
  {
    icon: <EmojiEventsIcon />,
    value: '25+',
    label: 'Premios Ganados',
  },
];

const AboutUs = () => {
  return (
    <Box
      component="section"
      sx={{
        py: 8,
        backgroundColor: 'background.paper',
      }}
    >
      <Container>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h2"
                sx={{
                  mb: 3,
                  fontWeight: 'bold',
                }}
              >
                Sobre Nosotros
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 3 }}
              >
                Con más de 15 años de experiencia en el mercado inmobiliario, nos hemos convertido en líderes del sector, ofreciendo servicios de primera calidad y soluciones personalizadas para cada uno de nuestros clientes.
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 3 }}
              >
                Nuestro compromiso con la excelencia y la satisfacción del cliente nos ha permitido construir una sólida reputación basada en la confianza y profesionalismo.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {stats.map((stat, index) => (
                <Grid item xs={6} key={stat.label}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    <Paper
                      sx={{
                        p: 3,
                        textAlign: 'center',
                        height: '100%',
                        backgroundColor: 'background.default',
                      }}
                    >
                      <Box
                        sx={{
                          color: 'primary.main',
                          mb: 2,
                          '& svg': {
                            fontSize: 40,
                          },
                        }}
                      >
                        {stat.icon}
                      </Box>
                      <Typography
                        variant="h4"
                        sx={{
                          mb: 1,
                          fontWeight: 'bold',
                          color: 'secondary.main',
                        }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                      >
                        {stat.label}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;