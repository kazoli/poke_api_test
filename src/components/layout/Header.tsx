import { useNavigate } from 'react-router-dom';
import { HiOutlineMenu } from 'react-icons/hi';
import Positioner from './Positioner';
import Logo from './Logo';
import DropDownMenu from '../general/DropDownMenu';
/**
 * Header for layouts that contains navigation
 * @date 2022. 12. 20. - 14:08:47
 *
 * @returns {JSX.Element}
 */
function Header() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-[1000] bg-[#ffffff] border-y border-[#000000]">
      <Positioner className="flex items-center justify-between py-[5px]">
        <Logo navigate={() => navigate('/')} />
        <DropDownMenu
          selector={<HiOutlineMenu className="text-[2rem] cursor-pointer outline-none" />}
          classContainer="relative"
          classList="bg-[#ffffff] whitespace-nowrap right-0 border border-black peer-focus:block active:block"
          classElement="block cursor-pointer p-[5px_10px] hover:bg-[#2b96d4] hover:text-[#ffffff]"
          options={[{ key: '/', value: 'Main page' }]}
          action={(value) => navigate(value)}
        />
      </Positioner>
    </header>
  );
}

export default Header;
