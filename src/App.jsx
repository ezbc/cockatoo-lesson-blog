import BlogTitles from './BlogTitles.jsx';
import Lessons from "./Lessons.jsx";
import react from 'react';
import AddBlogTitle from './AddBlogTitle.jsx'
import Search from './Search.jsx'

function App() {
    const initialTitles = ["Lesson 1.1 Project setup",
        "Lesson 1.2 React DOM and components",
        "Lesson 1.3 Form input, props, state and callbacks",
        "Lesson 1.4 lifting state, controlled components, props handling",
        "Lesson 1.5 side effects, custom hooks, fragments",
    ]
    const blogTitlesFromLocalStorage = JSON.parse(localStorage.getItem('savedBlogTitles')) || initialTitles
    const [blogTitles, setBlogTitles] = react.useState(blogTitlesFromLocalStorage); // replace initial with localstorage read
    // goal is save and read blogTitles with localStorage
    // we can use localStorage.setItem to save blogTitles - Done
    // we can use localStorage.getItem to read blogTitles
    const [searchText, setSearchText] = react.useState('');

    // run side effect when blogTitles state changes and save to localstorage
    react.useEffect(() => {
        localStorage.setItem('savedBlogTitles', JSON.stringify(blogTitles))
    }, [blogTitles])

    // run side effect on component render to load initial localstorage
    // react.useEffect(() => {
    //     setBlogTitles(JSON.parse(localStorage.getItem('savedBlogTitles')))
    // }, [])

    return (
        <div>
            <h1>Cockatoo Lesson Blog Title</h1>
            <AddBlogTitle onAddTitle={(newTitle) => {
                setBlogTitles([...blogTitles, newTitle]) // react does state update in background, asynchronously
            }}/>
            <Search onSearch={setSearchText}/>
            <BlogTitles titles={blogTitles} searchText={searchText}/>
            {/*<Lessons/>*/}
        </div>
    );
}

export default App;
