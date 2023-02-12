export default function AddBlogTitle({onAddTitle}) {

    function onSubmit(event) {
        event.preventDefault()
        const newBlogTitle = event.target[0].value
        onAddTitle(newBlogTitle)
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor={'blog-title'}>Add blog title</label>
            <input type='text' id={'blog-title'} name={'blog-title'}></input>
            <button type={'submit'}>Submit</button>
        </form>

    )
}
