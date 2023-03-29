import OffersList from '../../components/offers-list/offers-list';
import { Offer } from '../../types/offer';
import Tabs from './../../components/tabs/tabs';
import Sort from '../../components/sort/sort';
import Map from '../../components/map/map';
import Header from '../../components/header/header';
import { Fragment } from 'react';

type MainScreenProps = {
  offers: Offer[];
}

function Main({ offers }: MainScreenProps): JSX.Element {
  return (
    <Fragment>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <Sort />
              <div className="cities__places-list places__list tabs__content">
                <OffersList offers={offers} />
              </div>
            </section>
            <div className="cities__right-section">
              <div id="map">
                <Map />
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment >
  );
}

export default Main;
