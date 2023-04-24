import Button from '@ui/Button';
import styled from 'styled-components';

function BlogTitles({ titles, onRemove, className }) {
  return (
    <ul className={className}>
      {titles.map(blog => (
        <li key={blog.id}>
          <span>&#x2022;</span>
          <p>{blog.title}</p>
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
