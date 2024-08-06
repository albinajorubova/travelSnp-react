import React from 'react';
import cx from 'classnames';

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
          <img
            className={s.img}
            src={path}
            alt={`Travel photo ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default React.memo(PictureGrid);
