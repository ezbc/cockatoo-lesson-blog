import AddBlogForm from './AddBlogForm.jsx';
import { create } from './airtableApi.jsx';

const AddBlogPage = ({ state, runAction, refreshRecords }) => {
  const onAddBlogTitle = async newTitle => {
    runAction({
      type: 'START_ADDING_BLOG_TITLE',
    });
    const newBlogs = await create({ title: newTitle });
    runAction({
      type: 'FINISH_ADDING_BLOG_TITLE',
      payload: { newBlogs: newBlogs },
    });
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
