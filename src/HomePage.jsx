import { useEffect } from 'react';
import { listRecords } from './airtableApi.jsx';
import Search from './Search.jsx';
import BlogTitles from './BlogTitles.jsx';

const HomePage = ({ state, runAction }) => {
  useEffect(() => {
    runAction({
      type: 'START_LOADING_BLOG_TITLES',
    });
    listRecords({ searchText: state.searchText }).then(loadedTitles => {
      runAction({
        type: 'FINISH_LOADING_BLOG_TITLES',
        payload: { blogTitles: loadedTitles },
      });
    });
  }, [state.searchText]);

  const onSearch = searchText =>
    runAction({ type: 'SET_SEARCH_TEXT', payload: { searchText } });

  useEffect(() => {
    !!state.focus && runAction({ type: 'RESET_FOCUS' });
  }, [state.focus]);

  return (
    <div>
      <Search onSearch={onSearch} focus={state.focus === 'search'} />
      {state.isLoading ? (
        <p>Loading...</p>
      ) : (
        <BlogTitles titles={state.blogTitles} />
      )}
      {state.isAdding && <p>Adding...</p>}
    </div>
  );
};

export default HomePage;
