import styled from 'styled-components';
import { useContext } from 'react';
import { ReactComponent as UserIcon } from '@root/icons/user-avatar.svg';
import { AppContext } from '@root/App';

const UserProfile = ({ className }) => {
  const appContext = useContext(AppContext);
  return (
    <div className={className}>
      <UserIcon height={'32px'} width={'32px'} />
      <p>{appContext.username}</p>
    </div>
  );
};

export default styled(UserProfile)``;
