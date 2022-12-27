import { useEffect } from 'react';
import Loading from './Loading';
import Header from './Header';
import Footer from './Footer';

/**
 * Type definition for the props
 * @date 2022. 12. 20. - 14:01:09
 *
 * @typedef {tProps}
 */
type tProps = {
  children: JSX.Element;
  loading?: boolean;
};

/**
 * Default layout that wraps content of pages
 * @date 2022. 12. 20. - 14:01:09
 *
 * @param {tProps} props
 * @returns {JSX.Element}
 */
function DefaultLayout(props: tProps) {
  useEffect(() => {
    // scroll top in case of page change
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {props.loading && <Loading />}
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}

export default DefaultLayout;
