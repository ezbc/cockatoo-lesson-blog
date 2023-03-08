import BlogTitles from './BlogTitles.jsx';
import {useState, useEffect} from 'react';
import AddBlogTitle from './AddBlogTitle.jsx'
import Search from './Search.jsx'
import {getItem, setItem} from "./useSemiPersistentState.jsx";

const titleToBlog = (title) => ({id: crypto.randomUUID(), title})

const LOCALSTORAGE_KEY = 'savedBlogTitles'

function App() {
    const initialTitles = ["Lesson 1.1 Project setup",
        "Lesson 1.2 React DOM and components",
        "Lesson 1.3 Form input, props, state and callbacks",
        "Lesson 1.4 Lifting state, controlled components, props handling",
        "Lesson 1.5 Side effects, custom hooks, fragments",
        "Lesson 1.6 Reusable Components, Imperative React",
        "Lesson 1.7 Asynchronous Data, Conditional Rendering"
    ]
    const initialBlogs = initialTitles.map(title => titleToBlog(title))
    const [blogTitles, setBlogTitles] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(getItem(LOCALSTORAGE_KEY) || initialBlogs)
                }, 2000)
            }
        ).then((blogTitlesFromLocalStorage) => {
            setBlogTitles(blogTitlesFromLocalStorage)
            setIsLoading(false)
        })
    }, [])

    useEffect(() => {
        !isLoading && setItem(LOCALSTORAGE_KEY, blogTitles)
    }, [blogTitles])

    const [searchText, setSearchText] = useState('');
    const [focus, setFocus] = useState('search');

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
            {isLoading ? <p>Loading...</p> :
                (<BlogTitles titles={blogTitles} searchText={searchText}/>)}

        </div>
    );
}

export default App;
