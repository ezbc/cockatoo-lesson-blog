import React, { useState } from 'react';
import InputAndLabel from './InputAndLabel.jsx';

export default function Search({ onSearch, focus }) {
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
    <form>
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
}
