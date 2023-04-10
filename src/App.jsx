import { useReducer, useState } from 'react';
import HomePage from './HomePage.jsx';
import AddBlogPage from './AddBlogPage.jsx';
import { initialState, stateManagementFunction } from './blogState.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import paths from './paths.js';
import './App.css';
import Header from './Header';

function App() {
  const [state, runAction] = useReducer(stateManagementFunction, initialState);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const username = 'elijah'; // username typically set in global state after login

  return (
    <div className={`app ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      <Header
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        username={username}
      />
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
