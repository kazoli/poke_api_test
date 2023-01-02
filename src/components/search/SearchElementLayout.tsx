import { ReactNode } from 'react';

/**
 * Type definition of properties of the component
 * @date 2023. 01. 02. - 16:13:05
 *
 * @typedef {tProps}
 */
type tProps = {
  children: ReactNode;
  className: string;
};

/**
 * Layout for elements of search bar
 * @date 2023. 01. 02. - 16:13:05
 *
 * @prop {ReactNode} children Children elements of component
 * @prop {string} className Complementary class elements for basic design
 * @returns {JSX.Element}
 */
function SearchElementLayout(props: tProps) {
  return (
    <div
      className={`${props.className} flex rounded-full shadow-[inset_0_0_10px_5px_#e2be09,0_0_5px_1px_#247eb2] p-[15px_25px]`}
    >
      {props.children}
    </div>
  );
}

export default SearchElementLayout;
