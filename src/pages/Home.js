import { Box } from '@mui/material';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/sections/HeroSection';
import FeaturedProperties from '../components/sections/FeaturedProperties';
import Services from '../components/sections/Services';
import AboutUs from '../components/sections/AboutUs';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';
import Footer from '../components/layout/Footer';

const Home = () => {
  return (
    <Box>
      <Navbar />
      <Box id="home">
        <HeroSection />
      </Box>
      <Box id="properties">
        <FeaturedProperties />
      </Box>
      <Box id="services">
        <Services />
      </Box>
      <Box id="about">
        <AboutUs />
      </Box>
      <Box id="testimonials">
        <Testimonials />
      </Box>
      <Box id="contact">
        <Contact />
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;