import styled from 'styled-components';
import NavigationBar from './NavigationBar.jsx';
import Toggle from './Toggle.jsx';
import UserProfile from './UserProfile';

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
