import Main from '../../pages/main/main';
import { Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room-page';
import NotFound from '../not-found/not-found';
import { OfferType, Offers } from '../../types/offer';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { getAuthCheckedStatus } from '../../store/user-process/selectors';

// type InitialState = {
//   city: string;
//   offers: Offers[];
//   authorizationStatus: AuthorizationStatus;
//   isOffersDataLoading: boolean;
//   error: string | null;

// }

function App(): JSX.Element {

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);


  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
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
function getOffersDataLoadingStatus(state: InitialState): unknown {
  throw new Error('Function not implemented.');
}

function getErrorStatus(state: InitialState): unknown {
  throw new Error('Function not implemented.');
}

// const authorizationStatus = useAppSelector(getAuthorizationStatus);
// const isAuthChecked = useAppSelector(getAuthCheckedStatus);
// const isOffersDataLoading = useAppSelector(getOffersDataLoadingStatus);
// const isNoData = useAppSelector(getErrorStatus);

// console.log(authorizationStatus);
// console.log(isNoData);
// console.log(isAuthChecked);
// console.log(getOffersDataLoadingStatus);

{/* <Route
          path={AppRoute.Room}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
            </PrivateRoute>
          }
        />*/}
// import { getAuthCheckedStatus, getAuthorizationStatus } from '../../store/user-process/selectors';
// import ErrorMessage from './../error-message/error-message';
// import { store } from '../../store';
// import { loadOffers } from '../../store/action';
// import PrivateRoute from './../private-root/private-route';

// type AppTypes = {
//   offers: OfferType[];
// }

