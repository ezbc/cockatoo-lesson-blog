export default function AddBlogTitle(props) {

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
