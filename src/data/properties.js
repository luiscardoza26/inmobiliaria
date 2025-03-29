import { getPropertyImage } from '../utils/images';

export const properties = [
    {
      id: 1,
      title: 'Apartamento Moderno en el Centro',
      price: 250000,
      location: 'Centro Histórico',
      type: 'Apartamento',
      bedrooms: 2,
      bathrooms: 2,
      area: 85,
      image: getPropertyImage('property1'),
      gallery: [
        getPropertyImage('property1'),
        getPropertyImage('property-detail-1'),
        getPropertyImage('property-detail-2'),
        getPropertyImage('property-detail-3'),
      ]
    },
    {
      id: 2,
      title: 'Casa Familiar con Jardín',
      price: 380000,
      location: 'Zona Residencial',
      type: 'Casa',
      bedrooms: 4,
      bathrooms: 3,
      area: 200,
      image: getPropertyImage('property2'),
      gallery: [
        getPropertyImage('property2'),
        getPropertyImage('property2-detail-1'),
        getPropertyImage('property2-detail-2'),
        getPropertyImage('property2-detail-3'),
      ]
    },
    {
      id: 3,
      title: 'Penthouse de Lujo',
      price: 520000,
      location: 'Zona Financiera',
      type: 'Penthouse',
      bedrooms: 3,
      bathrooms: 3,
      area: 180,
      image: getPropertyImage('property3'),
      gallery: [
        getPropertyImage('property3'),
        getPropertyImage('property3-detail-1'),
        getPropertyImage('property3-detail-2'),
        getPropertyImage('property3-detail-3'),
      ]
    },
    // Add more properties as needed
  ];