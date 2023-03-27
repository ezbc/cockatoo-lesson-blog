import { useEffect, useState } from 'react';

const ToggleAsAFunction = ({ onSwitch, children }) => {
  const [toggle, setToggle] = useState();

  useEffect(() => {
    console.log('toggle mounted');
  }, []);

  const switchToggle = () => {
    const newToggle = !toggle;
    setToggle({ toggle: newToggle });
    onSwitch(newToggle);
  };

  return <button onClick={switchToggle}>{children}</button>;
};

export default ToggleAsAFunction;
