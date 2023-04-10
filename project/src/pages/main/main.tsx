import { useState } from 'react';
import OffersList from '../../components/offers-list/offers-list';
import { Offer } from '../../types/offer';
import Tabs from './../../components/tabs/tabs';
import Sort from '../../components/sort/sort';
import Map from '../../components/map/map';
import Header from '../../components/header/header';
import { useAppSelector } from '../../hooks';
// import { offers } from './../../mocks/offers';

type MainScreenProps = {
  offers: Offer[];
}

function Main({ offers }: MainScreenProps): JSX.Element {
  const [isActive, setIsActiveId] = useState<number | null>(null);
  const activeCity = useAppSelector((state) => state.city);
  const handleCardHover = (id: number | null) => setIsActiveId(id);
  const arrayOfActiveOffers = offers.filter((element, index) => offers[index].city.name === activeCity);

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
                {arrayOfActiveOffers.length}
                {arrayOfActiveOffers.length > 1 ? 'places' : 'place'} to stay in
                {activeCity}
              </b>
              <Sort />
              <div className="cities__places-list places__list tabs__content">

                <OffersList
                  offers={arrayOfActiveOffers}
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
