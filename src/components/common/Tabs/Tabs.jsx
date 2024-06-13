import React, { useState } from 'react';

import Link from 'next/link';

import s from './Tabs.module.scss';

const tabs = ['Популярные', 'Авторские', 'Походы', 'Сплавы', 'Велопрогулки'];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Популярные');

  const handleClick = tab => {
    setActiveTab(tab);
  };

  return (
    <nav className={s.tabs}>
      {tabs.map(tab => (
        <Link
          href=""
          key={tab}
          className={`${s.link} ${activeTab === tab ? s.active : ''}`}
          onClick={() => handleClick(tab)}
        >
          {tab}
        </Link>
      ))}
    </nav>
  );
};

export default React.memo(Tabs);
