import BlogTitles from './BlogTitles.jsx';
import react, {useEffect} from 'react';
import AddBlogTitle from './AddBlogTitle.jsx'
import Search from './Search.jsx'
import useSemiPersistentState from "./useSemiPersistentState.jsx";

const titleToBlog = (title) => ({id: crypto.randomUUID(), title})

function App() {
    const initialTitles = ["Lesson 1.1 Project setup",
        "Lesson 1.2 React DOM and components",
        "Lesson 1.3 Form input, props, state and callbacks",
        "Lesson 1.4 Lifting state, controlled components, props handling",
        "Lesson 1.5 Side effects, custom hooks, fragments",
    ]
    const initialBlogs = initialTitles.map(title => titleToBlog(title))
    const [blogTitles, setBlogTitles] = useSemiPersistentState('savedBlogTitles', initialBlogs)
    const [searchText, setSearchText] = react.useState('');
    const [focus, setFocus] = react.useState('search');

    // focus needs to be reset after the latest focus is applied
    useEffect(() => {
        !!focus && setFocus()
    }, [focus])

    const onAddBlogTitle = (newTitle) => {
        setBlogTitles([...blogTitles, titleToBlog(newTitle)])
        setFocus('addBlog')
    }
    return (
        <div>
            <h1>Cockatoo Lesson Blog Title</h1>
            <AddBlogTitle focus={focus === 'addBlog'} onAddTitle={onAddBlogTitle}/>
            <Search onSearch={setSearchText} focus={focus === 'search'}/>
            <BlogTitles titles={blogTitles} searchText={searchText}/>
        </div>
    );
}

export default App;
