import paths from './paths.js';
import styled from 'styled-components';

const NavigationBar = ({ className }) => {
  return (
    <div className={className}>
      <a href={paths.HOME}>Home</a>
      <a href={paths.NEW_BLOG}>Add Blog</a>
    </div>
  );
};

export default styled(NavigationBar)`
  *:not(:last-child) {
    margin-right: 8px;
  }
  > * {
    border: solid 1px var(--color);
    padding: 4px;
  }

  a {
    color: var(--link-color);
  }
`;
