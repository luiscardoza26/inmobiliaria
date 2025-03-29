import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Box,
    Chip,
    Stack,
  } from '@mui/material';
  import BedIcon from '@mui/icons-material/Bed';
  import BathtubIcon from '@mui/icons-material/Bathtub';
  import SquareFootIcon from '@mui/icons-material/SquareFoot';
  
  const PropertyCard = ({ property, onClick }) => {
    return (
      <Card 
        sx={{ 
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'transform 0.2s',
          cursor: 'pointer',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: 6,
          },
        }}
        onClick={() => onClick(property)}
      >
        <CardMedia
          component="img"
          height="240"
          image={property.image}
          alt={property.title}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography 
            variant="h6" 
            gutterBottom 
            sx={{ 
              fontWeight: 'bold',
              height: '64px',
              overflow: 'hidden',
            }}
          >
            {property.title}
          </Typography>
          <Typography 
            variant="h5" 
            color="primary" 
            sx={{ 
              fontWeight: 'bold',
              mb: 2 
            }}
          >
            ${property.price.toLocaleString()}
          </Typography>
          <Typography 
            variant="body2" 
            color="text.secondary" 
            sx={{ mb: 2 }}
          >
            {property.location}
          </Typography>
          <Stack 
            direction="row" 
            spacing={2} 
            sx={{ mb: 2 }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <BedIcon color="action" />
              <Typography variant="body2">{property.bedrooms}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <BathtubIcon color="action" />
              <Typography variant="body2">{property.bathrooms}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <SquareFootIcon color="action" />
              <Typography variant="body2">{property.area} m²</Typography>
            </Box>
          </Stack>
          <Chip 
            label={property.type} 
            size="small" 
            color="secondary" 
            sx={{ borderRadius: 1 }}
          />
        </CardContent>
      </Card>
    );
  };
  
  export default PropertyCard;