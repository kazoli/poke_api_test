type tProps = {
  trigger: JSX.Element;
  options: { [key: string]: string };
  action: (value: string) => void;
  classList: string;
  classElement: string;
};

function DropDownMenu(props: tProps) {
  return (
    <div className="drop-down relative">
      <button className="block">{props.trigger}</button>
      <ul className={`${props.classList} hidden absolute m-[0] p-[0] list-none`}>
        {Object.keys(props.options).map((key, index) => (
          <li key={index} className={props.classElement} onClick={() => props.action(key)}>
            {props.options[key]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropDownMenu;
