import { useEffect } from 'react';
import { deleteRecord, listRecords } from './airtableApi.jsx';
import Search from './Search.jsx';
import BlogTitles from './BlogTitles.jsx';
import paths from './paths.js';

const HomePage = ({ state, runAction }) => {
  const refreshRecords = () => {
    runAction({
      type: 'START_LOADING_BLOG_TITLES',
    });
    listRecords({ searchText: state.searchText }).then(loadedTitles => {
      runAction({
        type: 'FINISH_LOADING_BLOG_TITLES',
        payload: { blogTitles: loadedTitles },
      });
    });
  };

  useEffect(() => {
    refreshRecords();
  }, [state.searchText]);

  const onSearch = searchText =>
    runAction({ type: 'SET_SEARCH_TEXT', payload: { searchText } });

  const onRemove = async blog => {
    await deleteRecord(blog);
    refreshRecords();
  };

  useEffect(() => {
    !!state.focus && runAction({ type: 'RESET_FOCUS' });
  }, [state.focus]);

  return (
    <div>
      <Search onSearch={onSearch} focus={state.focus === 'search'} />
      {state.isLoading ? (
        <p>Loading...</p>
      ) : (
        <BlogTitles titles={state.blogTitles} onRemove={onRemove} />
      )}
      {state.isAdding && <p>Adding...</p>}
      <a href={paths.NEW_BLOG}>Add Blog</a>
    </div>
  );
};

export default HomePage;
