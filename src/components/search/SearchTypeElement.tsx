import { TiArrowRightOutline } from 'react-icons/ti';

/**
 * Type definition of properties of the component
 * @date 2023. 01. 02. - 16:09:59
 *
 * @typedef {tProps}
 */
type tProps = {
  typeName: string;
};

/**
 * Pokémon type element of the drop down menu list in search bar
 * @date 2023. 01. 02. - 16:09:59
 *
 * @prop {string} typeName Name of the selected type
 * @returns {JSX.Element}
 */
function SearchTypeElement(props: tProps) {
  return (
    <div className="group flex items-center gap-[5px] p-[5px] transition-all hover:shadow-[inset_0_0_10px_0_#f6ce09]">
      <TiArrowRightOutline className="group-hover:rotate-[90deg] duration-500 w-[1.2rem] h-[1.2rem]" />
      <span>{props.typeName}</span>
    </div>
  );
}

export default SearchTypeElement;
