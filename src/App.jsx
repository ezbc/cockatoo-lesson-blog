import { createContext } from 'react';
import AppInContext from '@root/AppInContext.jsx';
const AppContext = createContext();

function App() {
  return (
    <AppContext.Provider value={{ username: 'cookie 🍪' }}>
      <AppInContext />
    </AppContext.Provider>
  );
}

export default App;

export { AppContext };
