import { useState } from "react";
import Answers from '@/Questions/answers';
import NavigationButton  from '@/Questions/navigationButton';
import { FaArrowLeft } from "react-icons/fa";

export default function Questions({questions, hideExercise, finishTest}) 
{
    const initialState = 
    {
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
        let oralScore = 0;
        let prosthoScore = 0;
        let generalScore = 0;

        for (let i = 0; i < questions.length; i++) 
        {
            if (questions[i].endoAnswer === true) 
            { 
                if (answers[i] === "a") { endoScore = endoScore + 5; }
                else if (answers[i] === "b") { endoScore = endoScore = 4; }
                else if (answers[i] === "c") { endoScore = endoScore = 3; }
                else if (answers[i] === "d") { endoScore = endoScore = 2; }
                else { endoScore++; }
            }
            else if (questions[i].perioAnswer === true) 
            { 
                if (answers[i] === "a") { perioScore = perioScore + 5; }
                else if (answers[i] === "b") { perioScore = perioScore = 4; }
                else if (answers[i] === "c") { perioScore = perioScore = 3; }
                else if (answers[i] === "d") { perioScore = perioScore = 2; }
                else { perioScore++; }
            }
            else if (questions[i].orthoAnswer === true) 
            { 
                if (answers[i] === "a") { orthoScore = orthoScore + 5; }
                else if (answers[i] === "b") { orthoScore = orthoScore = 4; }
                else if (answers[i] === "c") { orthoScore = orthoScore = 3; }
                else if (answers[i] === "d") { orthoScore = orthoScore = 2; }
                else { orthoScore++; }
            }
            else if (questions[i].oralAnswer === true) 
            { 
                if (answers[i] === "a") { oralScore = oralScore + 5; }
                else if (answers[i] === "b") { oralScore = oralScore = 4; }
                else if (answers[i] === "c") { oralScore = oralScore = 3; }
                else if (answers[i] === "d") { oralScore = oralScore = 2; }
                else { oralScore++; }
            }
            else if (questions[i].prosthoAnswer === true) 
            { 
                if (answers[i] === "a") { prosthoScore = prosthoScore + 5; }
                else if (answers[i] === "b") { prosthoScore = prosthoScore = 4; }
                else if (answers[i] === "c") { prosthoScore = prosthoScore = 3; }
                else if (answers[i] === "d") { prosthoScore = prosthoScore = 2; }
                else { prosthoScore++; }
            }
            else if (questions[i].generalAnswer === true) 
            { 
                if (answers[i] === "a") { generalScore = generalScore + 5; }
                else if (answers[i] === "b") { generalScore = generalScore = 4; }
                else if (answers[i] === "c") { generalScore = generalScore = 3; }
                else if (answers[i] === "d") { generalScore = generalScore = 2; }
                else { generalScore++; }
            }
        }
        finishTest(endoScore, perioScore, orthoScore, oralScore, prosthoScore, generalScore);
    };

    const answerQuestion = (answer) => 
    {
        answers[currentQuestion] = answer;
        setState({
            ...state, answers
        });
    };

    const moveQuestion = (direction) => 
    {
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