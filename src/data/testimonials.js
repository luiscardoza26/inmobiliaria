import { getTestimonialImage } from '../utils/images';

export const testimonials = [
  {
    id: 1,
    name: 'Ana García',
    comment: 'Excelente servicio. Me ayudaron a encontrar la casa perfecta para mi familia. El proceso fue muy profesional y transparente desde el principio.',
    rating: 5,
    avatar: getTestimonialImage('testimonial1'),
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    comment: 'La asesoría legal fue fundamental para realizar una compra segura. Muy agradecido con todo el equipo por su profesionalismo y dedicación.',
    rating: 5,
    avatar: getTestimonialImage('testimonial2'),
  },
  {
    id: 3,
    name: 'María Torres',
    comment: 'Vendí mi propiedad en tiempo récord y al mejor precio. Su conocimiento del mercado es impresionante. Altamente recomendados.',
    rating: 5,
    avatar: getTestimonialImage('testimonial3'),
  },
];