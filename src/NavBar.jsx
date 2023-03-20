import paths from './paths.js';

const NavBar = () => {
  return (
    <div>
      <h1>Cockatoo Lesson Blog Title</h1>
      <a href={paths.HOME}>Home</a>
      <span> </span>
      <a href={paths.ADD_BLOG}>Add Blog</a>
    </div>
  );
};

export default NavBar;
