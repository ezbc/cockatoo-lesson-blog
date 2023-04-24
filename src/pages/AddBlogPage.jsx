import AddBlogForm from '@root/features/AddBlogForm.jsx';
import { create } from '@root/api/airtableApi';
import paths from '@root/paths';
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
    </>
  );
};

export default AddBlogPage;
