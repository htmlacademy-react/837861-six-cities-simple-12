import Main from '../../pages/main/main';
import { Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, FetchStatus } from '../../const';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room-page';
import NotFound from '../not-found/not-found';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { getOffersStatus } from '../../store/data-offers/selectors';

function App(): JSX.Element {

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const offersStatus = useAppSelector(getOffersStatus);


  if (authorizationStatus === AuthorizationStatus.Unknown || offersStatus === FetchStatus.Loading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Root} element={<Main />} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={AppRoute.Room} element={<Room />} />
        <Route path={AppRoute.NotFound} element={<NotFound />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
