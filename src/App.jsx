import BlogTitles from './BlogTitles.jsx';
import Lessons from "./Lessons.jsx";
import react from 'react';
import AddBlogTitle from './AddBlogTitle.jsx'

function App() {
    const [newTitle, setNewTitle] = react.useState();
    return (
        <div className="App">
            <h1>Cockatoo Lesson Blog Title</h1>
            <AddBlogTitle setNewTitle={setNewTitle}/>
            <BlogTitles newTitle={newTitle}/>
            <Lessons/>
        </div>
    );
}

export default App;
