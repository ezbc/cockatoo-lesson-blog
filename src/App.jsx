import BlogTitles from './BlogTitles.jsx';
import Lessons from "./Lessons.jsx";
import react from 'react';
import AddBlogTitle from './AddBlogTitle.jsx'
import Search from './Search.jsx'

function App() {
    const [newTitle, setNewTitle] = react.useState();
    const [searchText, setSearchText] = react.useState('');
    return (
        <div className="App">
            <h1>Cockatoo Lesson Blog Title</h1>
            <AddBlogTitle setNewTitle={setNewTitle}/>
            <Search onSearch={setSearchText} searchText={searchText}/>
            <BlogTitles newTitle={newTitle} searchText={searchText}/>
            <Lessons/>
        </div>
    );
}

export default App;
