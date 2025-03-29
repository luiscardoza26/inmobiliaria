import { Container, Typography, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';
import TestimonialCard from '../common/TestimonialCard';
import { testimonials } from '../../data/testimonials';

const Testimonials = () => {
  return (
    <Box
      component="section"
      sx={{
        py: 8,
        backgroundColor: 'background.default',
        position: 'relative',
        overflow: 'hidden',
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
            Lo que dicen nuestros clientes
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            sx={{ mb: 6 }}
          >
            Historias de éxito de quienes confiaron en nosotros
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={testimonial.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;