import Header from '@/components/Header';
import { fetchUser } from '@/services/user';
import React, { useEffect } from 'react';
import { useModel, useRequest } from 'umi';
import styles from './index.less';

interface LayoutProps {
  auth?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { masterState, setMasterState } = useModel('@@qiankunStateForSlave');

  const { data: user } = useRequest(fetchUser);

  useEffect(() => {
    if (user) {
      setMasterState({ user });
    }
  }, [user]);

  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
