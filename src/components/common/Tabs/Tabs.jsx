import React, { useState } from 'react';
import cx from 'classnames';

import s from './Tabs.module.scss';

const TAB = ['Популярные', 'Авторские', 'Походы', 'Сплавы', 'Велопрогулки'];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Популярные');

  const handleClick = tab => {
    setActiveTab(tab);
  };

  return (
    <nav className={s.tabs}>
      {TAB.map(tab => (
        <button
          href=""
          key={tab}
          type="button"
          className={cx(s.btn, { [s.active]: activeTab === tab })}
          onClick={() => handleClick(tab)}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
};

export default React.memo(Tabs);
