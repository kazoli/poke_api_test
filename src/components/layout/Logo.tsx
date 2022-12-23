import { ReactComponent as PokeBall } from '../../utils/images/Pokeball.svg';

type tProps = {
  navigate: () => void;
};

function Logo(props: tProps) {
  return (
    <div className="flex cursor-pointer" onClick={props.navigate}>
      <span className="mt-[-5px] font-[Poke] text-[2rem] pr-[5px]">PoKé</span>
      <PokeBall className="w-[50px] h-[50px]" />
      <span className="mt-[-5px] font-[Poke] text-[2rem] pl-[5px]">CaTcHeR</span>
    </div>
  );
}

export default Logo;
