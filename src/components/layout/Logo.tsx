import { ReactComponent as PokeBall } from '../../utils/images/Pokeball.svg';

/**
 * Props of logo
 * @date 2022. 12. 26. - 12:26:31
 *
 * @typedef {tProps}
 */
type tProps = {
  navigate: () => void;
};

/**
 * Logo
 * @date 2022. 12. 26. - 12:26:31
 *
 * @param {tProps} props
 * @returns {JSX.Element}
 */
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
