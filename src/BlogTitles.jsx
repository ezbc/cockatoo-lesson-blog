export default function BlogTitles({ titles, onRemove }) {
  return (
    <ul>
      {titles.map(blog => (
        <span key={blog.id}>
          <li>{blog.title}</li>
          <button onClick={() => onRemove && onRemove(blog)}>X</button>
        </span>
      ))}
    </ul>
  );
}
