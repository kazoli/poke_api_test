import { ReactNode } from 'react';

type tProps = {
  children: ReactNode;
  className: string;
};

function SearchElementLayout(props: tProps) {
  return (
    <div
      className={`${props.className} flex rounded-full shadow-[inset_0_0_10px_5px_#e2be09,0_0_5px_1px_#247eb2] p-[15px_25px]`}
    >
      {props.children}
    </div>
  );
}

export default SearchElementLayout;
