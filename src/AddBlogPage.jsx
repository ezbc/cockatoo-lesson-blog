import AddBlogForm from './AddBlogForm.jsx';
import { create } from './airtableApi.jsx';
import paths from './paths.js';
import { useNavigate } from 'react-router-dom';

const AddBlogPage = ({ state, runAction, refreshRecords }) => {
  const navigate = useNavigate();

  const onAddBlogTitle = async newTitle => {
    runAction({
      type: 'START_ADDING_BLOG_TITLE',
    });
    const newBlogs = await create({ title: newTitle });
    runAction({
      type: 'FINISH_ADDING_BLOG_TITLE',
      payload: { newBlogs: newBlogs },
    });

    // push user to home page
    navigate(paths.HOME);
  };

  return (
    <>
      <AddBlogForm
        focus={state.focus === 'addBlog'}
        onAddTitle={onAddBlogTitle}
      />
      <a href={paths.HOME}>Home</a>
    </>
  );
};

export default AddBlogPage;
