import { useEffect, useReducer } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import paths from './paths.js';
import { initialState, stateManagementFunction } from './state.jsx';
import Home from './HomePage.jsx';
import AddBlog from './AddBlog.jsx';

function App() {
  const [state, runAction] = useReducer(stateManagementFunction, initialState);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<Home state={state} runAction={runAction} />}
          path={paths.HOME}
        ></Route>
        <Route
          element={<AddBlog state={state} runAction={runAction} />}
          path={paths.ADD_BLOG}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
