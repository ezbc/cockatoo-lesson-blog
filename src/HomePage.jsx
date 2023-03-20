import { useEffect } from 'react';
import { listRecords } from './airtableApi.jsx';
import NavBar from './NavBar.jsx';
import Search from './Search.jsx';
import BlogTitles from './BlogTitles.jsx';

const filterBlogTitles = (blogTitles, searchText) =>
  blogTitles.filter(blogTitle =>
    blogTitle.title.toLowerCase().includes(searchText.toLowerCase())
  );

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

  // focus needs to be reset after the latest focus is applied
  useEffect(() => {
    !!state.focus && runAction({ type: 'RESET_FOCUS' });
  }, [state.focus]);

  return (
    <div>
      <NavBar />
      <Search onSearch={onSearch} focus={state.focus === 'search'} />
      {state.isLoading ? (
        <p>Loading...</p>
      ) : (
        <BlogTitles
          titles={filterBlogTitles(state.blogTitles, state.searchText)}
        />
      )}
      {state.isAdding && <p>Adding...</p>}
    </div>
  );
};

export default HomePage;
