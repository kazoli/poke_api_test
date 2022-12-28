import { ReactComponent as PokeBall } from '../../utils/images/Pokeball.svg';

type tProps = {
  typeName: string;
};

function SearchTypeElement(props: tProps) {
  return (
    <div className='flex items-center gap-[5px]'>
      <PokeBall className="w-[1.2rem] h-[1.2rem]" />
      <span>{props.typeName}</span>
    </div>
  );
}

export default SearchTypeElement;
