import { useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  Grid,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PropertyCard from './PropertyCard';
import PropertyDetailModal from './PropertyDetailModal';

const SearchResultsModal = ({ open, onClose, results }) => {
  const [selectedProperty, setSelectedProperty] = useState(null);

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="search-results-modal"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '90%', md: '80%' },
          maxHeight: '80vh',
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
          overflow: 'auto',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Typography variant="h5" component="h2">
            Resultados de búsqueda ({results.length})
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        {results.length === 0 ? (
          <Typography variant="body1" color="text.secondary" textAlign="center" py={4}>
            No se encontraron propiedades que coincidan con tu búsqueda.
          </Typography>
        ) : (
          <Grid container spacing={3}>
            {results.map((property) => (
              <Grid item xs={12} sm={6} md={4} key={property.id}>
                <PropertyCard 
                  property={property}
                  onClick={(prop) => setSelectedProperty(prop)}
                />
              </Grid>
            ))}
          </Grid>
        )}

        <PropertyDetailModal
          open={Boolean(selectedProperty)}
          onClose={() => setSelectedProperty(null)}
          property={selectedProperty}
        />
      </Box>
    </Modal>
  );
};

export default SearchResultsModal;