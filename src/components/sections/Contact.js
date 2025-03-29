import { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  TextField,
  Button,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const ContactInfo = ({ icon, title, content }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
    <Box
      sx={{
        mr: 2,
        color: 'primary.main',
        '& svg': {
          fontSize: 32,
        },
      }}
    >
      {icon}
    </Box>
    <Box>
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {content}
      </Typography>
    </Box>
  </Box>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log(formData);
  };

  return (
    <Box
      component="section"
      sx={{
        py: 8,
        backgroundColor: 'background.paper',
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
            Contáctanos
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            sx={{ mb: 6 }}
          >
            Estamos aquí para ayudarte
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Paper sx={{ p: 4 }}>
                <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
                  Información de Contacto
                </Typography>
                <ContactInfo
                  icon={<LocationOnIcon />}
                  title="Dirección"
                  content="1737 Cronin Estates Rodberg, NY 14660"
                />
                <ContactInfo
                  icon={<PhoneIcon />}
                  title="Teléfono"
                  content="	+1 (541) 494-2543"
                />
                <ContactInfo
                  icon={<EmailIcon />}
                  title="Email"
                  content="info@realestate.com"
                />
              </Paper>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Paper sx={{ p: 4 }}>
                <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
                  Envíanos un mensaje
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Nombre completo"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Teléfono"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Mensaje"
                        name="message"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        sx={{
                          height: 56,
                          backgroundColor: 'secondary.main',
                          '&:hover': {
                            backgroundColor: 'secondary.dark',
                          },
                        }}
                      >
                        Enviar Mensaje
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;