import { tDropDownOptions } from '../../app/general/types';

/**
 * Type definition of properties of the component
 * @date 2023. 01. 03. - 11:29:59
 *
 * @typedef {tProps}
 */
type tProps = {
  classContainer: string;
  classList: string;
  classElement: string;
  selector: string | JSX.Element;
  options: tDropDownOptions;
  action: (value: string) => void;
};

/**
 * Drop down component
 * @date 2023. 01. 03. - 11:29:59
 *
 * @prop {string} classContainer Class rules for main container of drop down
 * @prop {string} classList Class rules for list container of drop down
 * @prop {string} classElement Class rules for list elements of drop down
 * @prop {string | JSX.Element} selector Selector button content for the drop down
 * @prop {tDropDownOptions} options Data of option elements for the drop down
 * @prop {(value: string) => void} action Selecting action function for the drop down
 * @returns {JSX.Element}
 */
function DropDownMenu(props: tProps) {
  return (
    <div className={props.classContainer}>
      <button className="block w-[100%] peer">{props.selector}</button>
      <ul className={`${props.classList} hidden absolute`}>
        {props.options.map((element, index) => (
          <li key={index} className={props.classElement} onClick={() => props.action(element.key)}>
            {element.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropDownMenu;
