import { useEffect } from 'react';
import Loading from './Loading';
import Header from './Header';
import Footer from './Footer';
import Positioner from './Positioner';

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
      <Positioner className="py-[20px] sm:py-[50px]">
        <main>{props.children}</main>
      </Positioner>
      <Footer />
    </>
  );
}

export default DefaultLayout;
