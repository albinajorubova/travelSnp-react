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
      {imagePaths.map(path => (
        <div
          className={s.item}
          key={path}
        >
          <Image
            className={s.img}
            width="300"
            height="300"
            src={path.startsWith('/') ? path : `/${path}`}
            alt={`Travel photo`}
            priority
          />
        </div>
      ))}
    </div>
  );
};

export default React.memo(PictureGrid);
