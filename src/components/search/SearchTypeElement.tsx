import { ReactComponent as PokeBall } from '../../utils/images/Pokeball.svg';

type tProps = {
  typeName: string;
};

function SearchTypeElement(props: tProps) {
  return (
    <div className='group flex items-center gap-[5px] p-[5px] transition-all hover:shadow-[inset_0_0_10px_0_#f6ce09]'>
      <PokeBall className="group-hover:rotate-[180deg] duration-500 w-[1.2rem] h-[1.2rem]" />
      <span>{props.typeName}</span>
    </div>
  );
}

export default SearchTypeElement;
