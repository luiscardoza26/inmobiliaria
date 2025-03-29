import { Paper, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const ServiceCard = ({ service }) => {
  return (
    <Paper
      component={motion.div}
      whileHover={{ scale: 1.05 }}
      sx={{
        p: 4,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'background.paper',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          boxShadow: 8,
        },
      }}
    >
      <Box
        sx={{
          mb: 2,
          color: 'primary.main',
          '& svg': {
            fontSize: 48,
          },
        }}
      >
        {service.icon}
      </Box>
      <Typography
        variant="h5"
        component="h3"
        sx={{
          mb: 2,
          fontWeight: 'bold',
        }}
      >
        {service.title}
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ flex: 1 }}
      >
        {service.description}
      </Typography>
    </Paper>
  );
};

export default ServiceCard;