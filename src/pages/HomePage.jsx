import { useEffect } from 'react';
import {
  deleteRecord,
  listRecords,
  updateRecords,
} from '@root/api/airtableApi';
import Search from '@features/Search.jsx';
import BlogTitles from '@features/BlogTitles';
import { useAppContext } from '@root/App.jsx';
import { reorderObjectInIndexedArray } from '@root/ordering.jsx';

const HomePage = () => {
  const { state, runAction } = useAppContext();

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

  const onMove = (currentIndex, newIndex) => {
    const reorderedBlogTitles = reorderObjectInIndexedArray(
      currentIndex,
      newIndex,
      state.blogTitles
    );

    // this is an optimistic update, we immediately update the browser state expecting that airtable
    // will finish updating its records in the background. there's a possibility the airtable update
    // may fail though.
    runAction({
      type: 'SET_BLOG_TITLES',
      payload: { blogTitles: reorderedBlogTitles },
    });
    updateRecords(reorderedBlogTitles);

    // if we wanted to run a pessimistic update we would only update the blog state
    // after the reords were updated in airtable:
    // updateRecords(reorderedBlogTitles).then(updatedBlogTitles => {
    //   runAction({
    //     type: 'SET_BLOG_TITLES',
    //     payload: { blogTitles: updatedBlogTitles },
    //   });
    // });
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
        <BlogTitles onRemove={onRemove} onMove={onMove} />
      )}
      {state.isAdding && <p>Adding...</p>}
    </div>
  );
};

export default HomePage;
