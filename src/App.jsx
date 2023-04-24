import { createContext, useContext, useReducer } from 'react';
import AppInContext from '@root/AppInContext.jsx';
import { initialState, stateManagementFunction } from '@root/blogState.js';
const AppContext = createContext();

function App() {
  const [state, runAction] = useReducer(stateManagementFunction, initialState);

  return (
    <AppContext.Provider value={{ username: 'cookie 🍪', state, runAction }}>
      <AppInContext />
    </AppContext.Provider>
  );
}

const useAppContext = () => useContext(AppContext);

export default App;

export { AppContext, useAppContext };
