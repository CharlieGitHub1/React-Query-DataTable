import { useOnlineStatus } from '../../hooks/useOnlineStatus';
import { CiSaveDown2 } from 'react-icons/ci';
import { SaveButton, ButtonIcon } from './styles';
const SaveBtn = () => {
  const isOnline = useOnlineStatus();

  const handleSaveClick = () => {
    console.log('Save button clicked');
  };
  return (
    <SaveButton disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? (
        <>
          <ButtonIcon>
            <button>
              <CiSaveDown2 size={30} />
              <span>Save</span>
            </button>
          </ButtonIcon>
        </>
      ) : (
        <span className="reconnect">Reconnecting...</span>
      )}
    </SaveButton>
  );
};

export default SaveBtn;
