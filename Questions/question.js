import { useState } from "react";
import Answers from '@/Questions/answers';
import NavigationButton  from '@/Questions/navigationButton';
import { FaArrowLeft } from "react-icons/fa";

export default function Questions({questions, hideExercise, finishTest}) 
{
    const initialState = {
        currentQuestion: 0,
        answers: [],
        numberOfQuestions: questions.length,
        correctAnswers: [],
    };

    const [state, setState] = useState(initialState);
    const {currentQuestion, answers, numberOfQuestions} = state;
    const question = questions[currentQuestion];

    const submitAnswer = () => {
        let endoScore = 0;
        let perioScore = 0;
        let orthoScore = 0;
        for (let i = 0; i < questions.length; i++) {
            if (answers[i] === questions[i].endoAnswer) endoScore++;
            else if (answers[i] === questions[i].perioAnswer) perioScore++;
            else if (answers[i] === questions[i].orthoAnswer) orthoScore++;
        }
        finishTest(endoScore, perioScore, orthoScore);
    };

    const answerQuestion = (answer) => {
        answers[currentQuestion] = answer;
        setState({
            ...state, answers
        });
    };

    const moveQuestion = (direction) => {
        switch(direction) {
            case "next" : {
                if (currentQuestion === numberOfQuestions - 1) {
                    submitAnswer();
                    return;
                }
                setState({
                    ...state,
                    currentQuestion: currentQuestion + 1,
                });
                break;
            }
            case "prev" : {
                setState({
                    ...state,
                    currentQuestion: currentQuestion - 1,
                });
            }
        }
    };

    return (
        <div>
            <button onClick = {hideExercise} className = "flex items-center gap-1 bg-gray-400 p-2 rounded-sm shadow-md text-white">
                <span>
                    <FaArrowLeft/>
                </span>
                <span> Back </span>
            </button>
            <h1 className = "text-2xl mt-2 capitalize">
                {`${state.currentQuestion + 1}. ${question.question}`}
            </h1>
            <Answers 
                answers = {question.answers} 
                answerQuestion = {answerQuestion} 
                state = {state}
            />
            <NavigationButton state = {state} moveQuestion = {moveQuestion} />
        </div>
    );
}