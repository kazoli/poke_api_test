import { ReactNode } from 'react';

type tProps = {
  children: ReactNode;
  className: string;
};

function Positioner(props: tProps) {
  return (
    <div className={`${props.className} m-[0_auto] px-[15px] max-w-[1200px]`}>
      {props.children}
    </div>
  );
}

export default Positioner;
