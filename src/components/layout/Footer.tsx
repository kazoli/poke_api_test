import { memo } from 'react';

/**
 * Footer for layouts
 * @date 2022. 12. 20. - 14:08:18
 *
 * @returns {JSX.Element}
 */
function Footer() {
  return (
    <footer className="flex items-center bg-[#f0f0f0] border-y border-[#b0b0b0] min-h-[50px]">
      <div className="text-[#a0a0a0] flex-[1_1_auto] px-[10px] lg:max-w-[1200px] m-[0_auto]">Powered By PokéApi. Designed by Kazoli</div>
    </footer>
  );
}

export default memo(Footer);
