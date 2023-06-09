import { FaSquare } from "react-icons/fa";
import Answer from '@/Questions/answer';
const labels = ["a", "b", "c", "d", "e"];

export default function Answers ({answers, state, answerQuestion}) 
{
    const {currentQuestion} = state;

    const getIcon = (answer) => 
    {
        return answer === state.answers[currentQuestion] ? (
            <FaSquare color = "grey"/>
        ) : (
            <FaSquare color = "white" className = "border border-black" />
        );
    };

    return (
    <ul>
        {answers.map((answer, i) => (
            <Answer
                key = {i}
                icon = {getIcon(labels[i])}
                answerQuestion = {answerQuestion}
                answerText = {answer}
                answerValue = {labels[i]}
            />
        ))}
    </ul>
    );
}