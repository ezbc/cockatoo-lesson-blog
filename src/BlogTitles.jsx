export default function BlogTitles({ titles, onRemove }) {
  return (
    <ul>
      {titles.map(blog => (
        <span>
          <li key={blog.id}>{blog.title}</li>
          <button onClick={() => onRemove && onRemove(blog)}>X</button>
        </span>
      ))}
    </ul>
  );
}
