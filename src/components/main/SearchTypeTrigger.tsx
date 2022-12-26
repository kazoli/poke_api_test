import { BsCaretDown } from 'react-icons/bs';

type tProps = {
  selectedType: string;
};

function SearchTypeTrigger(props: tProps) {
  return (
    <div className="flex items-center justify-between flex-[1_1_auto] cursor-pointer gap-[10px] px-[10px]">
      <span>{props.selectedType}</span>
      <BsCaretDown className="mt-[3px]" />
    </div>
  );
}

export default SearchTypeTrigger;
