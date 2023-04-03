import paths from './paths.js';

const NavigationBar = () => {
  return (
    <div>
      <a href={paths.HOME}>Home</a>
      <span> </span>
      <a href={paths.NEW_BLOG}>Add Blog</a>
    </div>
  );
};

export default NavigationBar;
