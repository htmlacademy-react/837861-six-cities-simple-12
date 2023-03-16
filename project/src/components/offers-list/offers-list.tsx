import CityCard from '../city-card/cityCard';
import { OffersTypes } from '../../types/offers-types';
import { useState } from 'react';

type OffersListProp = {
  offers: OffersTypes[];
}

function OffersList({ offers }: OffersListProp): JSX.Element {
  const [isActive, setIsActive] = useState(0);
  console.log(`In offersList is ${isActive}`);
  return (
    <div>
      {offers.map((offer) => (
        <CityCard
          key={offer.id}
          id={offer.id}
          imageSrc={offer.imageSrc}
          price={offer.price}
          rating={offer.rating}
          linkDescription={offer.linkDescription}
          roomType={offer.roomType}
          isActive={offer.id}
          onMouseEnter={() => setIsActive(offer.id)}
        />
      ))}
    </div>
  );
}

export default OffersList;
