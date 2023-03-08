import BlogTitles from './BlogTitles.jsx';
import { useState, useEffect, useReducer } from 'react';
import AddBlogTitle from './AddBlogTitle.jsx';
import Search from './Search.jsx';
import { getItem, setItem } from './useSemiPersistentState.jsx';

const titleToBlog = title => ({ id: crypto.randomUUID(), title });

const initialTitles = [
  'Lesson 1.1 Project setup',
  'Lesson 1.2 React DOM and components',
  'Lesson 1.3 Form input, props, state and callbacks',
  'Lesson 1.4 Lifting state, controlled components, props handling',
  'Lesson 1.5 Side effects, custom hooks, fragments',
  'Lesson 1.6 Reusable Components, Imperative React',
  'Lesson 1.7 Asynchronous Data, Conditional Rendering',
];

const LOCALSTORAGE_KEY = 'savedBlogTitles';

const filterBlogTitles = (blogTitles, searchText) =>
  blogTitles.filter(blogTitle =>
    blogTitle.title.toLowerCase().includes(searchText.toLowerCase())
  );

const stateManagementFunction = (previousState, action) => {
  switch (action.type) {
    case 'FINISH_LOADING_BLOG_TITLES':
      return {
        ...previousState,
        isLoading: false,
        blogTitles: action.payload.blogTitles,
      };
    case 'SET_SEARCH_TEXT':
      return {
        ...previousState,
        searchText: action.payload.searchText,
      };
    case 'START_ADDING_BLOG_TITLE':
      return {
        ...previousState,
        isAdding: true,
      };
    case 'FINISH_ADDING_BLOG_TITLE':
      return {
        ...previousState,
        isAdding: false,
        blogTitles: [
          ...previousState.blogTitles,
          titleToBlog(action.payload.newTitle),
        ],
        focus: 'addBlog',
      };
    case 'RESET_FOCUS':
      return {
        ...previousState,
        focus: null,
      };
  }

  // return a new state, that is the entire state
};

// initial state should have the same properties as all new states returned
const initialState = {
  blogTitles: [],
  isLoading: true,
  isAdding: false,
  searchText: '',
  focus: 'search',
};

function App() {
  const initialBlogs = initialTitles.map(title => titleToBlog(title));
  const [state, runAction] = useReducer(stateManagementFunction, initialState);

  useEffect(() => {
    setTimeout(() => {
      const blogTitlesFromLocalStorage =
        getItem(LOCALSTORAGE_KEY) || initialBlogs;
      runAction({
        type: 'FINISH_LOADING_BLOG_TITLES',
        payload: { blogTitles: blogTitlesFromLocalStorage },
      });
    }, 2000);
  }, []);

  useEffect(() => {
    !state.isLoading && setItem(LOCALSTORAGE_KEY, state.blogTitles);
  }, [state.blogTitles]);

  // focus needs to be reset after the latest focus is applied
  useEffect(() => {
    !!state.focus && runAction({ type: 'RESET_FOCUS' });
  }, [state.focus]);

  const onAddBlogTitle = newTitle => {
    runAction({
      type: 'START_ADDING_BLOG_TITLE',
    });
    setTimeout(() => {
      runAction({
        type: 'FINISH_ADDING_BLOG_TITLE',
        payload: { newTitle: newTitle },
      });
    }, 2000);
  };

  const onSearch = searchText =>
    runAction({ type: 'SET_SEARCH_TEXT', payload: { searchText } });

  return (
    <div>
      <h1>Cockatoo Lesson Blog Title</h1>
      <AddBlogTitle
        focus={state.focus === 'addBlog'}
        onAddTitle={onAddBlogTitle}
      />
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
}

export default App;
