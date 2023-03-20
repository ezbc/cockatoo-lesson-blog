import { useReducer } from 'react';
import HomePage from './HomePage.jsx';
import AddBlogPage from './AddBlogPage.jsx';
import { initialState, stateManagementFunction } from './blogState.js';

function App() {
  const [state, runAction] = useReducer(stateManagementFunction, initialState);

  return (
    <div>
      <h1>Cockatoo Lesson Blog Title</h1>
      <HomePage state={state} runAction={runAction} />
      <AddBlogPage state={state} runAction={runAction} />
    </div>
  );
}

export default App;
