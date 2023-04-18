import { useRef, useEffect } from 'react';
import styled from 'styled-components';

const InputAndLabel = ({ id, children, focus, className, ...inputProps }) => {
  const ref = useRef();

  useEffect(() => {
    focus && ref.current.focus();
  });
  return (
    <div className={className}>
      <label htmlFor={id}>{children}</label>
      <input ref={ref} id={id} {...inputProps} />
    </div>
  );
};

export default styled(InputAndLabel)`
  label {
    margin-right: 8px;
  }
  input {
    color: var(--color);
    background-color: var(--background-color);
    border: solid 1px var(--color);
  }
`;
