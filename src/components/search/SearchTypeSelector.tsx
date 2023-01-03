import { BsCaretDown } from 'react-icons/bs';

/**
 * Type definition of properties of the component
 * @date 2023. 01. 02. - 16:05:29
 *
 * @typedef {tProps}
 */
type tProps = {
  selectedType: string;
};

/**
 * Selector component of Pokémon types
 * @date 2023. 01. 02. - 16:05:29
 *
 * @prop {string} selectedType Name of the selected type
 * @returns {JSX.Element}
 */
function SearchTypeSelector(props: tProps) {
  return (
    <div className="flex items-center justify-between flex-auto cursor-pointer gap-[5px]">
      <span>{props.selectedType}</span>
      <BsCaretDown className="mt-[3px]" />
    </div>
  );
}

export default SearchTypeSelector;
