import { useState } from 'react';

const Toggle = ({ onSwitch, initialValue, children }) => {
  const [toggle, setToggle] = useState(initialValue);

  const switchToggle = () => {
    const newToggle = !toggle;
    setToggle(newToggle);
    onSwitch(newToggle);
  };

  return <button onClick={switchToggle}>{children}</button>;
};

export default Toggle;
