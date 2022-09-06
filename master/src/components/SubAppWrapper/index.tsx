import { useModel } from 'umi';

interface SubAppWrapperProps {}

const SubAppWrapper: React.FC<SubAppWrapperProps> = ({ children }) => {
  const { masterState, setMasterState } = useModel('@@qiankunStateForSlave');

  console.log('masterState update', masterState);
  return <>{children}</>;
};

export default SubAppWrapper;
