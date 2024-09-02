import React from 'react';
import cx from 'classnames';

import Image from 'next/image';

import s from './PictureGrid.module.scss';

const PictureGrid = ({ imagePaths }) => {
  const CLASSNAME = cx(s.line, {
    [s.fivepic]: imagePaths.length > 4,
  });

  return (
    <div className={CLASSNAME}>
      {imagePaths.map((path, index) => (
        <div
          className={s.item}
          key={index}
          id={index}
        >
          <Image
            className={s.img}
            width="200"
            height="200"
            src={path.startsWith('/') ? path : `/${path}`}
            alt={`Travel photo ${index + 1}`}
            priority={true}
          />
        </div>
      ))}
    </div>
  );
};

export default React.memo(PictureGrid);
