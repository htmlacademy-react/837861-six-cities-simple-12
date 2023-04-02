import CityCard from '../city-card/city-card';
import { Offer } from '../../types/offer';

type OffersListProp = {
  offers: Offer[];
  onMouseEnter(id: number | null): void;
  onMouseLeave(id: number | null): void;
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
