import * as React from 'react';
import styles from './index.module.css';
import SiderBarMenus from './components/sidebar_menus';
import Logo from './components/logo';
import Content from './components/content';
const Home: React.FC = () => {
  return <div className={styles.background}>
    <div className={styles.header}>

      <Logo />
    </div>
    <div className={styles.container}>
      <div className={styles.menus}>
        <SiderBarMenus />
      </div>
      <div className={styles.content}>
        <Content />
      </div>
    </div>
  </div>
}

export default Home
