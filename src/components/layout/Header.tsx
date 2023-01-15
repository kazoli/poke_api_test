import { useNavigate } from 'react-router-dom';
import { HiOutlineMenu } from 'react-icons/hi';
import Logo from './Logo';
import DropDownMenu from '../general/DropDownMenu';

/**
 * Header component for layouts that contains logo and navigation
 * @date 2022. 12. 20. - 14:08:47
 *
 * @returns {JSX.Element}
 */
function Header() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-[1000] bg-[#ffffff] border-y border-[#000000]">
      <div className="layout-positioner flex items-center justify-between py-[5px]">
        <Logo navigate={() => navigate('/')} />
        <DropDownMenu
          selector={<HiOutlineMenu className="text-[2rem] cursor-pointer outline-none" />}
          classContainer="relative"
          classList="bg-[#ffffff] whitespace-nowrap right-0 border-t border-black peer-focus:block active:block"
          classElement="block cursor-pointer p-[5px_10px] hover:text-[#fff] hover:shadow-[inset_0_0_75px_0_#288ac3] border-x border-b border-black"
          options={[{ key: '/', value: 'Main page' }]}
          action={(value) => navigate(value)}
        />
      </div>
    </header>
  );
}

export default Header;
