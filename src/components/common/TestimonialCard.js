import { Paper, Typography, Avatar, Box, Rating } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const TestimonialCard = ({ testimonial }) => {
  return (
    <Paper
      sx={{
        p: 4,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'visible',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-8px)',
        },
      }}
    >
      <FormatQuoteIcon
        sx={{
          position: 'absolute',
          top: -20,
          left: 20,
          fontSize: 40,
          color: 'primary.main',
          backgroundColor: 'background.paper',
          borderRadius: '50%',
          padding: '8px',
        }}
      />
      <Typography
        variant="body1"
        sx={{
          mb: 3,
          fontStyle: 'italic',
          flex: 1,
        }}
      >
        "{testimonial.comment}"
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Avatar
          src={testimonial.avatar}
          alt={testimonial.name}
          sx={{ 
            width: 56, 
            height: 56,
            border: '2px solid',
            borderColor: 'primary.main',
          }}
        />
        <Box>
          <Typography variant="subtitle1" fontWeight="bold">
            {testimonial.name}
          </Typography>
          <Rating value={testimonial.rating} readOnly size="small" />
        </Box>
      </Box>
    </Paper>
  );
};

export default TestimonialCard;