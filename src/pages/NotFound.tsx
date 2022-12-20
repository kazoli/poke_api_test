import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import DefaultLayout from '../components/layout/DefaultLayout';

/**
 * Not found page if wrong path were entered into URL
 * @date 2022. 12. 20. - 14:00:56
 *
 * @returns {JSX.Element}
 */
function NotFound() {
  useEffect(() => {
    document.title = '404 - Not found';
  }, []);

  return (
    <DefaultLayout>
      <div className="not-found-wrapper">
        <h1>Requested page is not found!</h1>
        <Link to="/" className="link">
          Go back to main page
        </Link>
      </div>
    </DefaultLayout>
  );
}

export default NotFound;
