import { useState } from "react";
//import Answers from "./Answers";
//import { NavigationButton }  from "./NavigationButton";
import { FaArrowLeft } from "react-icons/fa";

export default function Questions ({questions, hideExercise, finishTest}) {
    const initialState = {
        currentQuestion: 0,
        answers: [],
        numberOfQuestions: questions.length,
        correctAnswers: [],
    };

    const [state, setState] = useState(initialState);
    const [currentQuestion, answers, numberOfQuestions] = state;
    const question = questions[currentQuestion];

    const submitAnswer = () => {}
    const answerQuestion = () => {}
    const moveQuestion = () => {}

    return (
        <div>
            <button className = "flex items-center gap-1 bg-gray-400 p-2 rounded-sm shadow-md text-white">
                <span>
                    <FaArrowLeft/>
                </span>
                <span> Back </span>
            </button>
            <h1 className = "text-2xl mt-2 capitalize">
                Question
            </h1>
            <ul>
                <li> a. answer </li>
                <li> b. answer </li>
                <li> c. answer </li>
                <li> d. answer </li>
            </ul>
            <div className = "flexg gap-2">
                <button>
                    Previous
                </button>
                <button>
                    Next
                </button>
            </div>
        </div>
    );
}