import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlineMenu } from 'react-icons/hi';
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
      <div className="flex items-center justify-between p-[5px_10px] lg:max-w-[1200px] m-[0_auto]">
        <Logo navigate={() => navigate('/')} />
        <DropDownMenu
          trigger={<HiOutlineMenu className="text-[2rem] cursor-pointer outline-none" />}
          classList="bg-[#ffffff] right-0 border border-black"
          classElement="whitespace-nowrap cursor-pointer p-[5px] hover:bg-[#2b96d4] hover:text-[#ffffff]"
          options={{
            '/': 'Pokémon finder',
            '/catched': 'My catched Pokémons',
          }}
          action={(value) => navigate(value)}
        />
      </div>
    </header>
  );
}

export default memo(Header);
