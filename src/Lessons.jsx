const LESSONS = {
    '1.1': {
        'learningObjectives': [
            "Getting started creating a React app",
            "Understanding React components",
            "Using JSX in React",
            "Working with lists in React",
        ]
    },
    '1.2': {
        'learningObjectives': [
            "Familiarize yourself with React DOM",
            "Build simple React Components"
        ]
    },
    '1.3': {
        'learningObjectives': [
            "Understand how to handle changes the user is making to input fields on your site",
            "Understand how object data can be passed between components",
            "Understand how state allows data to be altered/page content to be updated over time",
            "Understand how callback handlers are used to share data up the component tree",
        ]
    },
}

export default function Lessons({lessons}) {
    return (
        <div>
            <br/>
            <br/>
            {
            Object.entries(LESSONS).map(
                ([lesson, details]) => {
                    return (
                        <>
                            <h2 key={lesson}>Lesson {lesson}</h2>
                            <ul>{details.learningObjectives.map((learningObjective) =>
                                <li>{learningObjective}</li>)}</ul>
                        </>
                    )
                }
            )
        }
        </div>
    );
}
