import React, { useState } from 'react';
import InputAndLabel from './InputAndLabel.jsx';
import styled from 'styled-components';

const Search = ({ onSearch, focus, className }) => {
  const [timer, setTimer] = useState(null);

  function onChange(event) {
    if (timer) {
      clearTimeout(timer);
      setTimer(null);
    }
    setTimer(
      setTimeout(() => {
        const searchInput = event.target.value;
        onSearch(searchInput);
      }, 500)
    );
  }

  // When is passing JSX in prop appropriate
  return (
    <form className={className}>
      <InputAndLabel
        title={'Search'}
        placeholder={'Search for blogs'}
        id={'search'}
        name={'search'}
        type={'text'}
        onChange={onChange}
        focus={focus}
      >
        Search
      </InputAndLabel>
    </form>
  );
};

export default styled(Search)``;
