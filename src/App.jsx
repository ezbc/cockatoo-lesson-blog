import BlogTitles from './BlogTitles.jsx';
import Lessons from "./Lessons.jsx";
import react from 'react';
import AddBlogTitle from './AddBlogTitle.jsx'
import Search from './Search.jsx'

function App() {
    const initialTitles = ["Lesson 1.1 Project setup",
        "Lesson 1.2 React DOM and components",
        "Lesson 1.3 Form input, props, state and callbacks",
        "Lesson 1.4 Lifting state, controlled components, props handling",
        "Lesson 1.5 Side effects, custom hooks, fragments",
    ]
    const blogTitlesFromLocalStorage = JSON.parse(localStorage.getItem('savedBlogTitles')) || initialTitles
    const [blogTitles, setBlogTitles] = react.useState(blogTitlesFromLocalStorage);
    const [searchText, setSearchText] = react.useState('');

    // run side effect when blogTitles state changes and save to localstorage
    react.useEffect(() => {
        localStorage.setItem('savedBlogTitles', JSON.stringify(blogTitles))
    }, [blogTitles])

    return (
        <div>
            <h1>Cockatoo Lesson Blog Title</h1>
            <AddBlogTitle onAddTitle={(newTitle) => {
                setBlogTitles([...blogTitles, newTitle]) // react does state update in background, asynchronously
            }}/>
            <Search onSearch={setSearchText}/>
            <BlogTitles titles={blogTitles} searchText={searchText}/>
        </div>
    );
}

export default App;
