import { Link } from 'react-router-dom';
import styles from './notFound.module.css';

function NotFound(): JSX.Element {
  return (
    <>
      <h1>404 Page not found</h1>
      <div className={styles.container}>
        <Link to='/' className={styles.backLink}>Back to the main paig</Link>
      </div>
    </>
  );
}

export default NotFound;
