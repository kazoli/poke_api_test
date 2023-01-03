import { useEffect, useState } from 'react';
import { AiOutlineUpCircle } from 'react-icons/ai';

/**
 * Jump to top component
 * @date 2022. 12. 20. - 14:18:24
 *
 * @returns {JSX.Element}
 */
function JumpTop() {
  const [jumpTop, setJumpTop] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => setJumpTop(window.scrollY > 200));
  }, []);

  return (
    <>
      {jumpTop && (
        <AiOutlineUpCircle
          className="fixed bottom-[15px] right-[15px] bg-[#66bbff] hover:bg-[#f7d631] text-[2rem] text-[#ffffff] hover:text-[#303030] rounded-full shadow-[0_0_5px_1px_#a0a0a0] hover:shadow[0_0_10px_1px_#909090,inset_0_0_15px_0_#ffc400] cursor-pointer transition-all opacity-50 hover:opacity-100 z-[10000]"
          title="Jump top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }
        />
      )}
    </>
  );
}

export default JumpTop;
