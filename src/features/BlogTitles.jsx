import Button from '@ui/Button';
import styled from 'styled-components';
import { useAppContext } from '@root/App.jsx';

function BlogTitles({ onMove, onRemove, className }) {
  const { state } = useAppContext();
  return (
    <ul className={className}>
      {state.blogTitles.map(blog => (
        <li key={blog.id}>
          <span>&#x2022;</span>
          <p>{blog.title}</p>
          <button onClick={() => onMove(blog.index, blog.index + 1)}>
            Move Down
          </button>
          <button onClick={() => onMove(blog.index, blog.index - 1)}>
            Move Up
          </button>
          <Button onClick={() => onRemove && onRemove(blog)}>X</Button>
        </li>
      ))}
    </ul>
  );
}

export default styled(BlogTitles)`
  li {
    display: flex;
    align-items: center;

    > *:not(:last-child) {
      margin-right: 8px;
    }

    ${Button} {
      height: fit-content;
    }
  }
`;
