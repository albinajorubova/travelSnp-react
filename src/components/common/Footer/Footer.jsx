import React from 'react';
import { string } from 'prop-types';
import cx from 'classnames';
import s from './Footer.module.scss';

const Footer = ({ className }) => {
  return <div className={cx(s.root, className)}>Footer</div>;
};

Footer.propTypes = {
  className: string,
};

Footer.defaultProps = {
  className: '',
};

export default React.memo(Footer);
