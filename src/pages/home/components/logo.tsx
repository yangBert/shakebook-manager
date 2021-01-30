import * as React from 'react';
import CollapsedButton from './collapsed_button';
import styles from '@/pages/home/index.module.css';
import {
  TwitterOutlined,
} from '@ant-design/icons';

const Logo: React.FC = () => {
  return <div className={styles.logoContainer}>
    <TwitterOutlined className={styles.logo} />
    <strong className={styles.title}>SHAKEBOOK</strong>
    <CollapsedButton /></div>
}
export default Logo