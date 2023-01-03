import { ReactNode } from 'react';

/**
 * Type definition of properties of the component
 * @date 2023. 01. 03. - 11:14:04
 *
 * @typedef {tProps}
 */
type tProps = {
  children: ReactNode;
  className: string;
};

/**
 * Positioner component for layout components
 * @date 2023. 01. 03. - 11:14:04
 *
 * @prop {ReactNode} children Children elements of component
 * @prop {string} className Complementary class elements for basic design
 * @returns {JSX.Element}
 */
function Positioner(props: tProps) {
  return (
    <div className={`${props.className} m-[0_auto] px-[15px] max-w-[1200px]`}>{props.children}</div>
  );
}

export default Positioner;
