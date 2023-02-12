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
    const [blogTitles, setBlogTitles] = react.useState(initialTitles);
    const [searchText, setSearchText] = react.useState('');
    return (
        <div>
            <h1>Cockatoo Lesson Blog Title</h1>
            <AddBlogTitle onAddTitle={(newTitle) => setBlogTitles([...blogTitles, newTitle])}/>
            <Search onSearch={setSearchText}/>
            <BlogTitles titles={blogTitles} searchText={searchText}/>
            {/*<Lessons/>*/}
        </div>
    );
}

export default App;
