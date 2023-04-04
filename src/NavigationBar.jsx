import paths from './paths.js';
import styles from './NavigationBar.css';

const NavigationBar = () => {
  return (
    <div className={'navigation-bar'}>
      <a href={paths.HOME}>Home</a>
      <span> </span>
      <a href={paths.NEW_BLOG}>Add Blog</a>
    </div>
  );
};

export default NavigationBar;
