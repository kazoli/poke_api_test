import { useEffect, useState } from 'react';
import { AiOutlineUpCircle } from 'react-icons/ai';

/**
 * Jump top icon
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
          className="jump-top"
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
