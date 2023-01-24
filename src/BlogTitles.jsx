export default function BlogTitles(props) {
  return (
    <ul>
      <li>Lesson 1.1 Project setup</li>
      <li>Lesson 1.2 React DOM and components</li>
      <li>Lesson 1.3 Form input, props, state and callbacks</li>
        <li>{props.newTitle}</li>
    </ul>
  );
}
