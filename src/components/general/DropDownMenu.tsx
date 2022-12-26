type tProps = {
  trigger: string | JSX.Element;
  options: { [key: string]: string | JSX.Element };
  action: (value: string) => void;
  classContainer: string;
  classList: string;
  classElement: string;
};

function DropDownMenu(props: tProps) {
  return (
    <div className={props.classContainer}>
      <button className="block w-[100%] peer">{props.trigger}</button>
      <ul
        className={`${props.classList} hidden absolute m-[0] p-[0] list-none`}
      >
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
