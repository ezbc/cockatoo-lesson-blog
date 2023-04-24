import InputAndLabel from '@root/forms/InputAndLabel.jsx';

export default function AddBlogForm({ onAddTitle, focus }) {
  function onSubmit(event) {
    event.preventDefault();
    const newBlogTitle = event.target[0].value;
    onAddTitle(newBlogTitle);
  }

  return (
    <form onSubmit={onSubmit}>
      <InputAndLabel
        focus={focus}
        title={'addBlog'}
        placeholder={'Add blog'}
        id={'addBlog'}
        name={'addBlog'}
      >
        Add Blog
      </InputAndLabel>
      <button type={'submit'}>Submit</button>
    </form>
  );
}
