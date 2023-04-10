import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/action';
import cn from 'classnames';

function Tabs(): JSX.Element {

  const dispatch = useAppDispatch();
  const activeCity = useAppSelector((state) => state.city);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          <li className="locations__item">
            <a
              className={cn('locations__item-link tabs__item', activeCity === 'Paris' && 'tabs__item--active')}
              href="/#"
            >
              <span onClick={(evt) => {
                evt.preventDefault();
                dispatch(changeCity({ city: 'Paris' }));
              }}
              >
                Paris
              </span>
            </a>
          </li>
          <li className="locations__item">
            <a
              className={cn('locations__item-link tabs__item', activeCity === 'Cologne' && 'tabs__item--active')}
              href="/#"
            >
              <span onClick={(evt) => {
                evt.preventDefault();
                dispatch(changeCity({ city: 'Cologne' }));
              }}
              >
                Cologne
              </span>
            </a>
          </li>
          <li className="locations__item">
            <a
              className={cn('locations__item-link tabs__item', activeCity === 'Brussels' && 'tabs__item--active')}
              href="/#"
            >
              <span onClick={(evt) => {
                evt.preventDefault();
                dispatch(changeCity({ city: 'Brussels' }));
              }}
              >
                Brussels
              </span>
            </a>
          </li>
          <li className="locations__item">
            <a
              className={cn('locations__item-link tabs__item', activeCity === 'Amsterdam' && 'tabs__item--active')}
              href="/#"
            >
              <span onClick={(evt) => {
                evt.preventDefault();
                dispatch(changeCity({ city: 'Amsterdam' }));
              }}
              >
                Amsterdam
              </span>
            </a>
          </li>
          <li className="locations__item">
            <a
              className={cn('locations__item-link tabs__item', activeCity === 'Hamburg' && 'tabs__item--active')}
              href="/#"
            >
              <span onClick={(evt) => {
                evt.preventDefault();
                dispatch(changeCity({ city: 'Hamburg' }));
              }}
              >
                Hamburg
              </span>
            </a>
          </li>
          <li className="locations__item">
            <a
              className={cn('locations__item-link tabs__item', activeCity === 'Dusseldorf' && 'tabs__item--active')}
              href="/#"
            >
              <span onClick={(evt) => {
                evt.preventDefault();
                dispatch(changeCity({ city: 'Dusseldorf' }));
              }}
              >
                Dusseldorf
              </span>
            </a>
          </li>
        </ul>
      </section>
    </div >
  );
}

export default Tabs;
