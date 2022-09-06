import Header from '@/components/Header';
import React from 'react';
import styles from './index.less';

interface LayoutProps {
  auth?: boolean;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
