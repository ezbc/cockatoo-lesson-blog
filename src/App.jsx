import { useReducer, useState } from 'react';
import HomePage from './HomePage.jsx';
import AddBlogPage from './AddBlogPage.jsx';
import { initialState, stateManagementFunction } from './blogState.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import paths from './paths.js';
import Toggle from './Toggle.jsx';

const darkModeStyle = { background: 'black', color: 'white' };
const lightModeStyle = { background: 'white', color: 'black' };

function App() {
  const [state, runAction] = useReducer(stateManagementFunction, initialState);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div style={isDarkMode ? darkModeStyle : lightModeStyle}>
      <Toggle onSwitch={setIsDarkMode} initialValue={true}>
        {' '}
        {isDarkMode ? 'Light mode' : 'Dark Mode'}
      </Toggle>
      <BrowserRouter>
        <Routes>
          <Route
            path={paths.HOME}
            element={<HomePage state={state} runAction={runAction} />}
          />
          <Route
            path={paths.NEW_BLOG}
            element={<AddBlogPage state={state} runAction={runAction} />}
          />
        </Routes>
      </BrowserRouter>
      {/*<h1>Cockatoo Lesson Blog Title</h1>*/}
    </div>
  );
}

export default App;
