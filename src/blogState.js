import { reorderObjectInIndexedArray } from '@root/ordering.jsx';

export const stateManagementFunction = (previousState, action) => {
  switch (action.type) {
    case 'START_LOADING_BLOG_TITLES':
      return {
        ...previousState,
        isLoading: true,
      };
    case 'FINISH_LOADING_BLOG_TITLES':
      return {
        ...previousState,
        isLoading: false,
        blogTitles: action.payload.blogTitles,
      };
    case 'SET_BLOG_TITLES':
      return {
        ...previousState,
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
        blogTitles: [...previousState.blogTitles, ...action.payload.newBlogs],
        focus: 'addBlog',
      };
    case 'RESET_FOCUS':
      return {
        ...previousState,
        focus: null,
      };
  }
};

export const initialState = {
  blogTitles: [],
  isLoading: true,
  isAdding: false,
  searchText: '',
  focus: 'search',
};
