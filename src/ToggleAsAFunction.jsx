import { useEffect, useState } from 'react';

const ToggleAsAFunction = ({ onSwitch, initialValue, children }) => {
  const [toggle, setToggle] = useState(initialValue);

  useEffect(() => {
    console.log('toggle mounted');
  }, []);

  const switchToggle = () => {
    const newToggle = !toggle;
    setToggle(newToggle);
    onSwitch(newToggle);
  };

  return <button onClick={switchToggle}>{children}</button>;
};

export default ToggleAsAFunction;
