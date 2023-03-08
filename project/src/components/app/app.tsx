import Main from '../../pages/main/main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import NotFound from './../not-found/notFound';

type AppScreenProps = {
  offersCount: number;
}

function App({ offersCount }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main offersCount={offersCount} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/offer/:id' element={<Room />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
