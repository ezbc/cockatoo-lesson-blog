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

  // return a new state, that is the entire state
};

// initial state should have the same properties as all new states returned
export const initialState = {
  blogTitles: [],
  isLoading: true,
  isAdding: false,
  searchText: '',
  focus: 'search',
};
