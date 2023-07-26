import { useState } from 'react';
import NoImage from '../../utils/images/no_image.png';

/**
 * Type definition of properties of the component
 * @date 2023. 07. 26. - 13:46:32
 *
 * @typedef {tProps}
 */
type tProps = {
  className: string;
  src: string;
  alt: string;
};

/**
 * Image component
 * @date 2023. 07. 26. - 13:46:32
 *
 * @prop {string} className Styling to image
 * @prop {string} src The source URL of image
 * @prop {string} alt The alt text of image
 * @returns {JSX.Element}
 */
function Image(props: tProps) {
  const [img, setImg] = useState({ src: props.src, alt: props.alt });

  return (
    <img
      className={props.className}
      src={img.src}
      alt={img.alt}
      onError={() => setImg({ src: NoImage, alt: 'No image' })}
    />
  );
}

export default Image;
