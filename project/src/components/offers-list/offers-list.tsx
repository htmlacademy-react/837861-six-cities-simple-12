import CityCard from '../city-card/city-card';
import { Offer } from '../../types/offer';
// import { useState } from 'react';

type OffersListProp = {
  offers: Offer[];
  onMouseEnter(): void;
  onMouseLeave(): void;
}

function OffersList({
  offers,
  onMouseEnter,
  onMouseLeave,
}: OffersListProp): JSX.Element {

  return (
    <>
      {offers.map((offer) => (
        <CityCard
          offer={offer}
          key={offer.id}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      ))}
    </>
  );
}

export default OffersList;
