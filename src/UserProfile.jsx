import styled from 'styled-components';
import { ReactComponent as UserIcon } from './user-avatar.svg';

const UserProfile = ({ className, username }) => {
  return (
    <div className={className}>
      <UserIcon height={'32px'} width={'32px'} />
      <p>{username}</p>
    </div>
  );
};

export default styled(UserProfile)``;
