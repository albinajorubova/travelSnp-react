import React from 'react';
import TitileSubtitile from 'components/TitileSubtitile/TitileSubtitile';
import Tabs from 'components/Tabs/Tabs';

const Tours = () => {
  return (
    <section>
      <TitileSubtitile title="Выбери свой тур" />
      <Tabs />
    </section>
  );
};

export default React.memo(Tours);
