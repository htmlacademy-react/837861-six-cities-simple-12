import OffersList from '../../components/offers-list/offers-list';
import { Offer } from '../../types/offer';
import Tabs from './../../components/tabs/tabs';
import Sort from '../../components/sort/sort';
import Map from '../../components/map/map';
import Logo from '../../components/logo/logo';
import { Fragment } from 'react';


type MainScreenProps = {
  offers: Offer[];
}

function Main({ offers }: MainScreenProps): JSX.Element {

  return (
    <Fragment>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <div className="header__nav-profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </div>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="/#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
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
              <Map className="cities__map" />
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default Main;
