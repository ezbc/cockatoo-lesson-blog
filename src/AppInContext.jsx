import { useReducer, useState } from 'react';
import HomePage from '@root/pages/HomePage.jsx';
import AddBlogPage from '@root/pages/AddBlogPage';
import { initialState, stateManagementFunction } from '@root/blogState.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import paths from '@root/paths.js';
import '@root/App.css';
import Header from '@features/Header.jsx';

function App() {
  const [state, runAction] = useReducer(stateManagementFunction, initialState);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`app ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
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
    </div>
  );
}

export default App;
