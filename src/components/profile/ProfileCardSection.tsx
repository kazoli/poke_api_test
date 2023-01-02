import { ReactNode } from 'react';

/**
 * Type definition of properties of the component
 * @date 2023. 01. 02. - 16:43:46
 *
 * @typedef {tProps}
 */
type tProps = {
  label: string;
  data: ReactNode;
};

/**
 * Section element for the profile card
 * @date 2023. 01. 02. - 16:43:46
 *
 * @prop {string} label Label of the component
 * @prop {ReactNode} data Data element or elements related to label
 * @returns {JSX.Element}
 */
function ProfileCardSection(props: tProps) {
  return (
    <section className="m-[15px_0] text-[#303030]">
      <label className="font-bold block">{props.label}</label>
      <div>{props.data}</div>
    </section>
  );
}

export default ProfileCardSection;
