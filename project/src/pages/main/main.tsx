import { useState } from 'react';
import OffersList from '../../components/offers-list/offers-list';
import Tabs from './../../components/tabs/tabs';
import Sort from '../../components/sort/sort';
import Map from '../../components/map/map';
import Header from '../../components/header/header';
import { useAppSelector } from '../../hooks';
import { getOffers } from '../../store/data-offers/selectors';
import { getCurrentCity } from '../../store/ui/selectors';

function Main(): JSX.Element {
  const [isActive, setIsActiveId] = useState<number | null>(null);
  const activeCity = useAppSelector(getCurrentCity);
  const offers = useAppSelector(getOffers);
  const activeOffers = offers.filter((element) => element.city.name === activeCity);

  const handleCardHover = (id: number | null) => setIsActiveId(id);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b
                className="places__found"
              >
                {activeOffers.length} {' '}
                {activeOffers.length > 1 ? 'places' : 'place'} to stay in {' '}
                {activeCity}
              </b>
              <Sort />
              <div className="cities__places-list places__list tabs__content">

                <OffersList
                  offers={activeOffers}
                  onMouseEnter={handleCardHover}
                  onMouseLeave={handleCardHover}
                />
              </div>
            </section>
            <div className="cities__right-section">
              <Map
                offers={offers}
                selectedPointId={isActive}
                className="cities__map"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
