import {
    Modal,
    Box,
    Typography,
    IconButton,
    Grid,
    Button,
    MobileStepper,
  } from '@mui/material';
  import CloseIcon from '@mui/icons-material/Close';
  import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
  import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
  import { useState } from 'react';
  import { scrollToSection } from '../../utils/scrollUtils';
  
  const PropertyDetailModal = ({ open, onClose, property }) => {
    const [activeStep, setActiveStep] = useState(0);
    const images = property?.gallery || [];
  
    const handleNext = () => {
      setActiveStep((prevStep) => prevStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevStep) => prevStep - 1);
    };
  
    const handleContactClick = () => {
      onClose();
      scrollToSection('contact');
    };
  
    if (!property) return null;
  
    return (
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="property-detail-modal"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '90%', md: '80%' },
            maxHeight: '90vh',
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
            overflow: 'auto',
          }}
        >
          <IconButton
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: 'grey.500',
            }}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
  
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative' }}>
                <Box
                  component="img"
                  sx={{
                    width: '100%',
                    height: 400,
                    objectFit: 'cover',
                    borderRadius: 1,
                  }}
                  src={images[activeStep]}
                  alt={property.title}
                />
                <MobileStepper
                  steps={images.length}
                  position="static"
                  activeStep={activeStep}
                  sx={{
                    maxWidth: '100%',
                    flexGrow: 1,
                    backgroundColor: 'transparent',
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                  }}
                  nextButton={
                    <Button
                      size="small"
                      onClick={handleNext}
                      disabled={activeStep === images.length - 1}
                    >
                      <KeyboardArrowRight />
                    </Button>
                  }
                  backButton={
                    <Button
                      size="small"
                      onClick={handleBack}
                      disabled={activeStep === 0}
                    >
                      <KeyboardArrowLeft />
                    </Button>
                  }
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" component="h2" gutterBottom>
                {property.title}
              </Typography>
              <Typography variant="h5" color="primary" gutterBottom>
                ${property.price.toLocaleString()}
              </Typography>
              <Typography variant="body1" paragraph>
                {property.location}
              </Typography>
  
              <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={6}>
                  <Typography variant="body1">
                    <strong>Tipo:</strong> {property.type}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">
                    <strong>Área:</strong> {property.area} m²
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">
                    <strong>Habitaciones:</strong> {property.bedrooms}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">
                    <strong>Baños:</strong> {property.bathrooms}
                  </Typography>
                </Grid>
              </Grid>
  
              <Typography variant="body1" paragraph>
                Esta propiedad excepcional ofrece una combinación perfecta de comodidad y estilo. 
                Ubicada en una zona privilegiada, cuenta con excelentes acabados y todas las 
                comodidades modernas que busca para su hogar ideal.
              </Typography>
  
              <Box sx={{ mt: 4 }}>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  ¿Quiere saber más sobre esta propiedad?
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  onClick={handleContactClick}
                  fullWidth
                >
                  Contáctenos
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    );
  };
  
  export default PropertyDetailModal;