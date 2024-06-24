import React from 'react';
import cx from 'classnames';
import { string } from 'prop-types';

import FooterNav from 'components/FooterNav';

import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer
      id="footer"
      className={s.footer}
    >
      <section className={s.content}>
        <h3>Наши социальные сети</h3>
        <FooterNav />
      </section>
    </footer>
  );
};

export default React.memo(Footer);
