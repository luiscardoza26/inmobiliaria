import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  Grid,
  MenuItem,
  styled,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { properties } from '../../data/properties';
import SearchResultsModal from '../common/SearchResultsModal';
import { getHeroImage } from '../../utils/images';

const StyledHeroSection = styled(Box)(({ theme }) => ({
  height: '100vh',
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${getHeroImage()})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  color: 'white',
}));

const propertyTypes = [
  'Casa',
  'Apartamento',
  'Terreno',
  'Oficina',
  'Local Comercial',
];

const HeroSection = () => {
  const [searchParams, setSearchParams] = useState({
    location: '',
    type: '',
    maxPrice: '',
  });
  const [searchResults, setSearchResults] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    
    const results = properties.filter(property => {
      const matchLocation = !searchParams.location || 
        property.location.toLowerCase().includes(searchParams.location.toLowerCase());
      const matchType = !searchParams.type || 
        property.type === searchParams.type;
      const matchPrice = !searchParams.maxPrice || 
        property.price <= parseInt(searchParams.maxPrice);
      
      return matchLocation && matchType && matchPrice;
    });

    setSearchResults(results);
    setModalOpen(true);
  };

  const handleInputChange = (e) => {
    setSearchParams({
      ...searchParams,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <StyledHeroSection>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
              }}
            >
              Encuentra la propiedad de tus sueños
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                fontWeight: 400,
              }}
            >
              Las mejores propiedades al mejor precio
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Paper
              component="form"
              onSubmit={handleSearch}
              elevation={3}
              sx={{
                p: 3,
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    name="location"
                    label="Ubicación"
                    variant="outlined"
                    placeholder="¿Dónde quieres vivir?"
                    value={searchParams.location}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    select
                    fullWidth
                    name="type"
                    label="Tipo de propiedad"
                    value={searchParams.type}
                    onChange={handleInputChange}
                  >
                    {propertyTypes.map((type) => (
                      <MenuItem key={type} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    fullWidth
                    name="maxPrice"
                    label="Presupuesto máximo"
                    type="number"
                    variant="outlined"
                    placeholder="$"
                    value={searchParams.maxPrice}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} md={2}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    sx={{
                      height: '56px',
                      backgroundColor: 'secondary.main',
                      '&:hover': {
                        backgroundColor: 'secondary.dark',
                      },
                    }}
                    startIcon={<SearchIcon />}
                  >
                    Buscar
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <SearchResultsModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        results={searchResults}
      />
    </StyledHeroSection>
  );
};

export default HeroSection;