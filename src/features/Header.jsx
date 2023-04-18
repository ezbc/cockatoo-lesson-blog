import styled from 'styled-components';
import NavigationBar from '@root/features/NavigationBar';
import Toggle from '@ui/Toggle';
import UserProfile from '@features/UserProfile';

const Header = ({ className, isDarkMode, setIsDarkMode }) => {
  return (
    <div className={className}>
      <NavigationBar />
      <div className={'theme-and-user'}>
        <Toggle onSwitch={setIsDarkMode} initialValue={false}>
          {' '}
          {isDarkMode ? 'Light mode' : 'Dark Mode'}
        </Toggle>
        <UserProfile />
      </div>
    </div>
  );
};

export default styled(Header)`
  display: flex;
  justify-content: space-between;
  align-content: center;

  .theme-and-user {
    ${Toggle} {
      height: fit-content;
      margin-right: 10px;
    }
    display: flex;
  }
`;
