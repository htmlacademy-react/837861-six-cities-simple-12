import { OffersTypes } from '../types/offers-types';

export const offers: OffersTypes[] = [
  {
    id: 0,
    isPremium: true,
    imageSrc: 'img/apartment-01.jpg',
    price: 120,
    rating: '80%',
    linkDescription: 'Beautiful luxurious apartment at great location',
    roomType: 'Apartment',
  },
  {
    id: 1,
    isPremium: false,
    imageSrc: 'img/room.jpg',
    price: 80,
    rating: '80%',
    linkDescription: 'Wood and stone place',
    roomType: 'Privet room',
  },
  {
    id: 2,
    isPremium: false,
    imageSrc: 'img/apartment-02.jpg',
    price: 132,
    rating: '80%',
    linkDescription: 'Canal View Prinsengracht',
    roomType: 'Apartment',
  },
  {
    id: 3,
    isPremium: true,
    imageSrc: 'img/apartment-03.jpg',
    price: 180,
    rating: '100%',
    linkDescription: 'Nice, cozy, warm big bed apartment',
    roomType: 'Apartment',
  },
];
