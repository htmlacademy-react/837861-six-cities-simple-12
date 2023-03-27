import { Fragment } from 'react';
import CityCard from '../city-card/city-card';
import { Offer } from '../../types/offer';
import { useState } from 'react';

type OffersListProp = {
  offers: Offer[];
}

function OffersList({ offers }: OffersListProp): JSX.Element {
  const [, setIsActiveId] = useState<number | null>(null);
  return (
    <Fragment>
      {offers.map((offer) => (
        <CityCard
          offer={offer}
          key={offer.id}
          onMouseEnter={() => setIsActiveId(offer.id)}
          onMouseLeave={() => setIsActiveId(null)}
        />
      ))}
    </Fragment>
  );
}

export default OffersList;
