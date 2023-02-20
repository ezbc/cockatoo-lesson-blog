export default function BlogTitles({titles, searchText}) {

    function matchesSearch(blogTitle) {
        return blogTitle.title.toLowerCase().includes(searchText.toLowerCase())
    }

    const blogsMatchingSearch = titles.filter(matchesSearch)

    return (
        <ul>
            {blogsMatchingSearch.map((blog) => <li key={blog.id}>{blog.title}</li>)}
        </ul>
    );
}
