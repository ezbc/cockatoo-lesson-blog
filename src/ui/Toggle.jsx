import { useState } from 'react';
import Button from '@root/ui/Button.jsx';
import styled from 'styled-components';

const Toggle = ({ onSwitch, initialValue, children, className }) => {
  const [toggle, setToggle] = useState(initialValue);

  const switchToggle = () => {
    const newToggle = !toggle;
    setToggle(newToggle);
    onSwitch(newToggle);
  };

  return (
    <Button className={className} onClick={switchToggle}>
      {children}
    </Button>
  );
};

export default styled(Toggle)`
  color: red;
`;
