import { useOnlineStatus } from '../../hooks/useOnlineStatus';
import { HiStatusOnline, HiStatusOffline } from 'react-icons/hi';
import { StatusContainer, StatusIcon, StatusText } from './styles';

const StatusBar = () => {
  const isOnline = useOnlineStatus();

  return (
    <StatusContainer>
      <StatusIcon>
        {isOnline ? <HiStatusOnline /> : <HiStatusOffline />}
      </StatusIcon>

      <StatusText>{isOnline ? 'Online' : 'Offline'}</StatusText>
    </StatusContainer>
  );
};

export default StatusBar;
