import BlogTitles from './BlogTitles.jsx';
import react from 'react';
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
    const [ blogTitles, setBlogTitles]= useSemiPersistentState('savedBlogTitles', initialBlogs)
    const [searchText, setSearchText] = react.useState('');

    // Create InputWithLabel component and refactor search and add blog title
    // Focus on add blog after creating one, focus on search by default
    // add remove button

    return (
        <div>
            <h1>Cockatoo Lesson Blog Title</h1>
            <AddBlogTitle onAddTitle={(newTitle) => {
                setBlogTitles([...blogTitles, titleToBlog(newTitle)]) // react does state update in background, asynchronously
            }}/>
            <Search onSearch={setSearchText}/>
            <BlogTitles titles={blogTitles} searchText={searchText}/>
        </div>
    );
}

export default App;
