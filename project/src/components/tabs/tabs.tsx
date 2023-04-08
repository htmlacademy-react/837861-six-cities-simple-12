// import { MouseEventHandler } from 'react';
// import { ThunkDispatch } from '@reduxjs/toolkit';
import { useAppDispatch } from '../../hooks';
// import { store } from '../../store';
import { changeCity } from '../../store/action';
// import { MouseEventHandler } from 'react';
// import { changeCity } from './../../store/action';

function Tabs(): JSX.Element {


  // const handleTabClick = (evt: React.MouseEvent<HTMLElement>) => console.log(evt.target.id);
  const dispatch = useAppDispatch();
  // const handleTabClick = (evt: MouseEvent | null): string => (evt.target.id);
  // console.log(` tabs ${dispatch}`);
  // const handleTabClick = (evt: MouseEventHandler) => store.dispatch(changeCity(evt.target.id));
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          <li className="locations__item">
            <a className="locations__item-link tabs__item" href="/#">
              <span onClick={dispatch.changeCity()} id="Paris">Paris</span>
            </a>
          </li>
          <li className="locations__item">
            <a className="locations__item-link tabs__item" href="/#">
              <span onClick={dispatch.changeCity()} id="Cologne">Cologne</span>
              {/* <span onClick={handleTabClick} id="Cologne">Cologne</span> */}
            </a>
          </li>
          <li className="locations__item">
            <a className="locations__item-l+ink tabs__item" href="/#">
              <span onClick={dispatch.changeCity()} id="Brussels">Brussels</span>
              {/* <span onClick={handleTabClick} id="Brussels">Brussels</span> */}
            </a>
          </li>
          <li className="locations__item">
            <a className="locations__item-link tabs__item tabs__item--active" href="/#">
              <span onClick={dispatch.changeCity()} id="Amsterdam">Amsterdam</span>
              {/* <span onClick={handleTabClick} id="Amsterdam">Amsterdam</span> */}
            </a>
          </li>
          <li className="locations__item">
            <a className="locations__item-link tabs__item" href="/#">
              <span onClick={dispatch.changeCity()} id="Hamburg">Hamburg</span>
              {/* <span onClick={handleTabClick} id="Hamburg">Hamburg</span> */}
            </a>
          </li>
          <li className="locations__item">
            <a className="locations__item-link tabs__item" href="/#">
              <span onClick={dispatch.changeCity()} id="Dusseldorf">Dusseldorf</span>
              {/* <span onClick={handleTabClick} id="Dusseldorf">Dusseldorf</span> */}
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
