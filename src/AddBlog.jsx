import NavBar from './NavBar.jsx';
import AddBlogTitle from './AddBlogTitle.jsx';
import { create } from './airtableApi.jsx';
import paths from './paths.js';
import { useNavigate } from 'react-router-dom';

const AddBlogPage = ({ state, runAction }) => {
  let navigate = useNavigate();

  const onAddBlogTitle = async newTitle => {
    runAction({
      type: 'START_ADDING_BLOG_TITLE',
    });
    const newBlogs = await create({ title: newTitle });
    runAction({
      type: 'FINISH_ADDING_BLOG_TITLE',
      payload: { newBlogs: newBlogs },
    });
    navigate(paths.HOME);
  };

  return (
    <>
      <NavBar />
      <AddBlogTitle
        focus={state.focus === 'addBlog'}
        onAddTitle={onAddBlogTitle}
      />
    </>
  );
};

export default AddBlogPage;
