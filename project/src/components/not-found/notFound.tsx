import { Link } from 'react-router-dom';

function NotFound(): JSX.Element {
  return (
    <>
      <h1>404 Not found</h1>
      <Link to='/'>To the main paig</Link>
    </>
  );
}

export default NotFound;
