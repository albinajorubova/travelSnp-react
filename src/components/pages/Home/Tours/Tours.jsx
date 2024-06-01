import React from 'react';
import TitileSubtitile from 'components/TitileSubtitile/TitileSubtitile';
import Tabs from 'components/Tabs/Tabs';

const Tours = () => {
  return (
    <>
      <TitileSubtitile
        title="Выбери свой тур"
      />
      <Tabs/>
    </>
  );
};

export default React.memo(Tours);
