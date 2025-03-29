import { Container, Typography, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';
import ServiceCard from '../common/ServiceCard';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import GavelIcon from '@mui/icons-material/Gavel';
import AssessmentIcon from '@mui/icons-material/Assessment';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

const services = [
  {
    id: 1,
    title: 'Compra y Venta',
    description: 'Facilitamos el proceso de compra y venta de propiedades, garantizando las mejores condiciones y precios del mercado.',
    icon: <HomeWorkIcon />,
  },
  {
    id: 2,
    title: 'Asesoría Legal',
    description: 'Brindamos asesoramiento legal completo para todas tus transacciones inmobiliarias, asegurando procesos seguros y transparentes.',
    icon: <GavelIcon />,
  },
  {
    id: 3,
    title: 'Tasaciones',
    description: 'Realizamos tasaciones profesionales para determinar el valor real de tu propiedad en el mercado actual.',
    icon: <AssessmentIcon />,
  },
  {
    id: 4,
    title: 'Administración',
    description: 'Gestionamos tus propiedades de manera eficiente, maximizando su rentabilidad y minimizando tus preocupaciones.',
    icon: <BusinessCenterIcon />,
  },
];

const Services = () => {
  return (
    <Box
      component="section"
      sx={{
        py: 8,
        backgroundColor: 'background.default',
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 2,
              fontWeight: 'bold',
            }}
          >
            Nuestros Servicios
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            sx={{ mb: 6 }}
          >
            Soluciones inmobiliarias integrales para todas tus necesidades
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} lg={3} key={service.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;