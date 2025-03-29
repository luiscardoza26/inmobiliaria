import { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { scrollToSection } from '../../utils/scrollUtils';
import { getLogo } from '../../utils/images';

const pages = [
  { id: 'home', label: 'Inicio' },
  { id: 'properties', label: 'Propiedades' },
  { id: 'services', label: 'Servicios' },
  { id: 'about', label: 'Nosotros' },
  { id: 'contact', label: 'Contacto' }
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavClick = (sectionId) => {
    handleCloseNavMenu();
    scrollToSection(sectionId);
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{
        backgroundColor: trigger ? 'white' : 'transparent',
        boxShadow: trigger ? 1 : 'none',
        transition: 'all 0.3s ease-in-out'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            src={getLogo()}
            alt="Real Estate Logo"
            sx={{ 
              display: { xs: 'none', md: 'flex' },
              mr: 1,
              height: 40,
              width: 'auto'
            }}
          />
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: trigger ? 'primary.main' : 'white',
              textDecoration: 'none',
            }}
          >
            REAL ESTATE
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: trigger ? 'primary.main' : 'white' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem 
                  key={page.id} 
                  onClick={() => handleNavClick(page.id)}
                >
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            component="img"
            src={getLogo()}
            alt="Real Estate Logo"
            sx={{ 
              display: { xs: 'flex', md: 'none' },
              mr: 1,
              height: 35,
              width: 'auto'
            }}
          />
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              color: trigger ? 'primary.main' : 'white',
              textDecoration: 'none',
            }}
          >
            REAL ESTATE
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map((page) => (
              <Button
                key={page.id}
                onClick={() => handleNavClick(page.id)}
                sx={{ 
                  my: 2, 
                  color: trigger ? 'primary.main' : 'white', 
                  display: 'block',
                  '&:hover': {
                    color: 'secondary.main'
                  }
                }}
              >
                {page.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;