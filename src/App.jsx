import BlogTitles from './BlogTitles.jsx';
import Lesson1_3 from './Lesson1_3';
import react from 'react';

function AddBlogTitle(props) {

    function onSubmit(event) {
        event.preventDefault()
        const newBlogTitle = event.target[0].value
        props.setNewTitle(newBlogTitle)
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor={'blog-title'}>Add blog title</label>
            <input type='text' id={'blog-title'} name={'blog-title'}></input>
            <button type={'submit'}>Submit</button>
        </form>

    )

}
// props - pass information down tree
// callbacks - pass information up tree
// state -

function App() {
    const [newTitle, setNewTitle] = react.useState();
    return (
        <div className="App">
            {/*<h1>Lesson</h1>*/}
            {/*<Lesson1_3/>*/}
            <h1>Cockatoo Lesson Blog Titles
            </h1>
            <AddBlogTitle setNewTitle={setNewTitle}/>
            <BlogTitles newTitle={newTitle} />
        </div>
    );
}

export default App;
