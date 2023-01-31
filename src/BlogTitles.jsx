export default function BlogTitles(props) {
    const blogs = ["Lesson 1.1 Project setup",
        "Lesson 1.2 React DOM and components",
        "Lesson 1.3 Form input, props, state and callbacks",
        props.newTitle || '']

    return (
        <ul>
            {blogs.map((blog) => <li key={blog}>{blog}</li>)}
        </ul>
    );
}
