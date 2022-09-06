import { useState } from 'react';
import 'zone.js'; // for angular subapp
import { MasterState } from './services/types';

// 给路由绑定的微应用传值
export function useQiankunStateForSlave() {
  const [masterState, setMasterState] = useState<MasterState>({});

  return {
    masterState,
    setMasterState,
  };
}
