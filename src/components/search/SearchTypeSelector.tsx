import { BsCaretDown } from 'react-icons/bs';
import SearchElementLayout from './SearchElementLayout';

type tProps = {
  selectedType: string;
};

function SearchTypeSelector(props: tProps) {
  return (
    <SearchElementLayout className="">
      <div className="flex items-center justify-between flex-auto cursor-pointer gap-[5px]">
        <span>{props.selectedType}</span>
        <BsCaretDown className="mt-[3px]" />
      </div>
    </SearchElementLayout>
  );
}

export default SearchTypeSelector;
