import { ReactComponent as PokeBall } from '../../utils/images/Pokeball.svg';

/**
 * Loading spinner
 * @date 2022. 12. 20. - 14:18:52
 *
 * @returns {JSX.Element}
 */
const Loading = () => {
  return (
    <div className="fixed top-[10px] left-[50%] translate-x-[-50%] z-[10000] flex items-center bg-[#ffffff] shadow-[inset_0_0_15px_0_#b1dcf1,0_0_5px_1px_#247eb2] p-[3px_15px] rounded-full">
      <PokeBall className="w-[20px] h-[20px] animate-spin" />
      <span className="text-[1.5rem] text-[#303030] mx-[10px] uppercase">Loading</span>
      <PokeBall className="w-[20px] h-[20px] animate-spin" />
    </div>
  );
};

export default Loading;
