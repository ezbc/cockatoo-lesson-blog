export default function BlogTitles({titles, searchText}) {

    function matchesSearch(blogTitle) {
        return blogTitle.toLowerCase().includes(searchText.toLowerCase())
    }

    const blogsMatchingSearch = titles.filter(matchesSearch)

    return (
        <ul>
            {blogsMatchingSearch.map((blog) => <li key={blog}>{blog}</li>)}
        </ul>
    );
}
