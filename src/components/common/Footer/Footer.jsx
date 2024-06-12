import React from 'react';
import cx from 'classnames';
import { string } from 'prop-types';

import s from './Footer.module.scss';

const Footer = () => {
  return <div className={cx(s.root)}>Footer</div>;
};

Footer.propTypes = {
  className: string,
};

Footer.defaultProps = {
  className: '',
};

export default React.memo(Footer);
