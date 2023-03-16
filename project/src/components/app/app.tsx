import Main from '../../pages/main/main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import NotFound from '../not-found/not-found';
import { OffersTypes } from '../../types/offers-types';

type AppScreenProps = {
  offers: OffersTypes[];
}

function App({ offers }: AppScreenProps): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Main offers={offers} />} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={AppRoute.Room} element={<Room />} />
        <Route path={AppRoute.NotFound} element={<NotFound />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
