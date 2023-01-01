import { ReactNode } from 'react';

type tProps = {
  label: string;
  data: ReactNode;
};

function ProfileCardSection(props: tProps) {
  return (
    <section className="m-[15px_0] text-[#303030]">
      <label className="font-bold block">{props.label}</label>
      <div>{props.data}</div>
    </section>
  );
}

export default ProfileCardSection;
