export default function BlogTitles({ titles }) {
  return (
    <ul>
      {titles.map(blog => (
        <li key={blog.id}>{blog.title}</li>
      ))}
    </ul>
  );
}
