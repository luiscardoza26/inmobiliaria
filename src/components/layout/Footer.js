import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { scrollToSection } from '../../utils/scrollUtils';
import { getLogo } from '../../utils/images';

const Footer = () => {
  const quickLinks = [
    { id: 'home', label: 'Inicio' },
    { id: 'properties', label: 'Propiedades' },
    { id: 'services', label: 'Servicios' },
    { id: 'about', label: 'Nosotros' },
    { id: 'contact', label: 'Contacto' }
  ];

  const services = [
    { id: 'buy', label: 'Compra de Propiedades' },
    { id: 'sell', label: 'Venta de Propiedades' },
    { id: 'legal', label: 'Asesoría Legal' },
    { id: 'valuation', label: 'Tasaciones' },
    { id: 'management', label: 'Administración' }
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Sobre Nosotros */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Box
                component="img"
                src={getLogo()}
                alt="Real Estate Logo"
                sx={{ 
                  height: 40,
                  width: 'auto',
                  mr: 1,
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                REAL ESTATE
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Somos líderes en el mercado inmobiliario, comprometidos con brindar el mejor servicio y las mejores propiedades a nuestros clientes.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton
                color="inherit"
                aria-label="facebook"
                component="a"
                href="#"
                target="_blank"
                sx={{
                  textDecoration: 'none',
                  textAlign: 'left',
                  '&:hover': {
                    color: 'secondary.main',
                  },
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="twitter"
                component="a"
                href="#"
                target="_blank"
                sx={{
                  textDecoration: 'none',
                  textAlign: 'left',
                  '&:hover': {
                    color: 'secondary.main',
                  },
                }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="instagram"
                component="a"
                href="#"
                target="_blank"
                sx={{
                  textDecoration: 'none',
                  textAlign: 'left',
                  '&:hover': {
                    color: 'secondary.main',
                  },
                }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="linkedin"
                component="a"
                href="#"
                target="_blank"
                sx={{
                  textDecoration: 'none',
                  textAlign: 'left',
                  '&:hover': {
                    color: 'secondary.main',
                  },
                }}
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Enlaces Rápidos */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Enlaces Rápidos
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {quickLinks.map((link) => (
                <Link
                  key={link.id}
                  component="button"
                  onClick={() => scrollToSection(link.id)}
                  color="inherit"
                  sx={{
                    textDecoration: 'none',
                    textAlign: 'left',
                    '&:hover': {
                      color: 'secondary.main',
                    },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Servicios */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Servicios
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {services.map((service) => (
                <Link
                  key={service.id}
                  component="button"
                  onClick={() => scrollToSection(service.id)}
                  color="inherit"
                  sx={{
                    textDecoration: 'none',
                    textAlign: 'left',
                    '&:hover': {
                      color: 'secondary.main',
                    },
                  }}
                >
                  {service.label}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Contacto */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Contacto
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              1737 Cronin Estates Rodberg, NY 14660
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Teléfono: +1 (541) 494-2543
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Email: info@realestate.com
            </Typography>
            <Typography variant="body2">
              Horario: Lun - Vie: 9:00 - 18:00
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" color="inherit">
            © {new Date().getFullYear()} Real Estate. Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;