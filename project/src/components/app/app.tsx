import Main from '../../pages/main/main';

type AppScreenProps = {
  offersCount: number;
}

function App({ offersCount }: AppScreenProps): JSX.Element {
  return (
    <div>
      <Main
        offersCount={offersCount}
      />
    </div>
  );
}

export default App;
