import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';

import Header from './Header';
import Welcome from './Welcome';
import Crowloan from './Crowloan';
import Auction from './Auction';

const cx = classNames.bind(styles);

const PloPage = () => {
  return (
    <div className={cx('main')}>
      <div className={cx('inner')}>
        <Header />
        <Welcome />
        <Crowloan />
        <Auction />
      </div>
    </div>
  );
};

export default React.memo(PloPage);
