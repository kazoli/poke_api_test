import { useEffect } from 'react';
import Loading from './Loading';
import Header from './Header';
import Footer from './Footer';

/**
 * Type definition of properties of the component
 * @date 2022. 12. 20. - 14:01:09
 *
 * @typedef {tProps}
 */
type tProps = {
  children: JSX.Element;
  loading?: boolean;
};

/**
 * Default layout component that wraps content of pages
 * @date 2022. 12. 20. - 14:01:09
 *
 * @prop {ReactNode} children Children elements of component
 * @prop {undefined | boolean} loading Loading component to show or not
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
      <main className="layout-positioner py-[20px] sm:py-[50px]">{props.children}</main>
      <Footer />
    </>
  );
}

export default DefaultLayout;
