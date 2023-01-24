import BlogTitles from './BlogTitles.jsx';
import Lesson1_3 from './Lesson1_3';
import react from 'react';
import AddBlogTitle from './AddBlogTitle.jsx'

function App() {
    const [newTitle, setNewTitle] = react.useState();
    return (
        <div className="App">
            {/*<h1>Lesson</h1>*/}
            {/*<Lesson1_3/>*/}
            <h1>Cockatoo Lesson Blog Titles
            </h1>
            <AddBlogTitle setNewTitle={setNewTitle}/>
            <BlogTitles newTitle={newTitle}/>
        </div>
    );
}

export default App;
