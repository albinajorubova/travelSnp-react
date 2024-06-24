import React, { useState } from 'react';

import Link from 'next/link';

import s from './Tabs.module.scss';

const Tab = ['Популярные', 'Авторские', 'Походы', 'Сплавы', 'Велопрогулки'];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Популярные');

  const handleClick = tab => {
    setActiveTab(tab);
  };

  return (
    <nav className={s.tabs}>
      {Tab.map(tab => (
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
