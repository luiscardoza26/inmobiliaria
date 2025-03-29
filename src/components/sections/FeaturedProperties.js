import { Container, Typography, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import PropertyCard from '../common/PropertyCard';
import PropertyDetailModal from '../common/PropertyDetailModal';
import { properties } from '../../data/properties'; 

const FeaturedProperties = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const featuredProperties = properties.slice(0, 3);
  
  return (
    <Box 
      component="section" 
      sx={{ 
        py: 8,
        backgroundColor: 'background.paper' 
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
              fontWeight: 'bold'
            }}
          >
            Propiedades Destacadas
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            sx={{ mb: 6 }}
          >
            Descubre nuestras mejores opciones seleccionadas para ti
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {featuredProperties.map((property, index) => (
            <Grid item xs={12} md={4} key={property.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <PropertyCard 
                  property={property}
                  onClick={() => setSelectedProperty(property)}
                />
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <PropertyDetailModal
          open={Boolean(selectedProperty)}
          onClose={() => setSelectedProperty(null)}
          property={selectedProperty}
        />
      </Container>
    </Box>
  );
};

export default FeaturedProperties;