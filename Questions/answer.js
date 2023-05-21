export default function Answer (props) {
    const {icon, answerQuestion, answerTest, answerValue} = props;

    
return (
    <li>
        <button onClick = {() => answerQuestion(answerValue)}
        className = "p-2 flex items-center gap-2 hover:text-blue-900"
        >
            <span>{icon}</span>
            {`${answerValue}. ${answerTest}`}
        </button>
    </li>
    )
}