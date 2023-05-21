export default function ExerciseList ({ exercises, func }) {
    return (
        <>
            <h3 className = "text-2xl">
                Start the Quiz
            </h3>
            <ul>
                {exercises.map((exercise) => (
                    <li key = {exercise.id} className = "hover:text-blue-900">
                        <button onClick = {() => func(exercise.id)}>
                            {exercise.title}
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}