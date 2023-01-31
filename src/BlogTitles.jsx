export default function BlogTitles(props) {
    const blogs = ["Lesson 1.1 Project setup",
        "Lesson 1.2 React DOM and components",
        "Lesson 1.3 Form input, props, state and callbacks",
        props.newTitle || '']

    function matchesSearch(blogTitle) {
        return blogTitle.toLowerCase().includes(props.searchText.toLowerCase())
    }

    const blogsMatchingSearch = blogs.filter(matchesSearch)

    return (
        <ul>
            {blogsMatchingSearch.map((blog) => <li key={blog}>{blog}</li>)}
        </ul>
    );
}
