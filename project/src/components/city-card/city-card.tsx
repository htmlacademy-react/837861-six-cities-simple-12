import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';
import { AppRoute, convertRating } from '../../const';
import { generatePath } from 'react-router';

type CityCardProp = {
  offer: Offer;
  onMouseEnter(): void;
  onMouseLeave(): void;
};


function CityCard({
  offer,
  onMouseEnter,
  onMouseLeave
}: CityCardProp): JSX.Element {
  const { images, price, id, description, type, rating } = offer;
  return (
    <article
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="cities__card place-card"
    >
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="/#">
          <img className="place-card__image" src={images[id]} width="260" height="200" alt="Place img" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: convertRating(rating) }}></span>
            <span className="visually-hidden">Rating </span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoute.Room, { id: `${offer.id}` })}>{description}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article >
  );
}

export default CityCard;
