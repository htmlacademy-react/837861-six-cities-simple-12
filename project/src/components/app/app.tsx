import Main from '../../pages/main/main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import NotFound from './../not-found/notFound';

type AppScreenProps = { offersCount: number }

function App({ offersCount }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Main offersCount={offersCount} />} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={AppRoute.Room} element={<Room />} />
        <Route path={AppRoute.NotFound} element={<NotFound />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
