import Positioner from './Positioner';

/**
 * Footer component
 * @date 2022. 12. 20. - 14:08:18
 *
 * @returns {JSX.Element}
 */
function Footer() {
  return (
    <footer className="flex items-center bg-[#f0f0f0] border-y border-[#b0b0b0] min-h-[60px]">
      <Positioner className="text-[#a0a0a0] flex-auto">
        Powered By PokéApi. Designed by Kazoli.
      </Positioner>
    </footer>
  );
}

export default Footer;
