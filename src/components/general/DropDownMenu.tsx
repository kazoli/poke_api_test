import { tDropDownOptions } from '../../app/general/types';

type tProps = {
  selector: string | JSX.Element;
  classContainer: string;
  classList: string;
  classElement: string;
  options: tDropDownOptions;
  action: (value: string) => void;
};

function DropDownMenu(props: tProps) {
  return (
    <div className={props.classContainer}>
      <button className="block w-[100%] peer">{props.selector}</button>
      <ul className={`${props.classList} hidden absolute m-[0] p-[0] list-none`}>
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
