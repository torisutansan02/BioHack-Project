import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';

import Link from 'next/link';
import Navbar from '../components/Navbar';
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Inter } from '@next/font/google'
import ExerciseList from '@/components/exerciseList';
import Questions from '@/Questions/question';
import Socials from '@/components/Socials';

const inter = Inter({ subsets: ['latin'] })

export function getServerSideProps() {
  const exercises = [
    { title: "Dental Specialists", id: 0 },
  ];

  return {
    props: {
      exercises,
    },
  };
}

export function getQuestions (exerciseId) {
  const questions = [
    {
      id : 0,
      exerciseId: 0,
      question:
        "You are experiencing discomfort throughout your mouth due to plaque buildup in your teeth.",
      answers: ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"],
      orthoAnswer: "a",
    },
    {
      id : 0,
      exerciseId: 2,
      question:
        "You are experiencing discomfort throughout your mouth due to plaque buildup in your teeth.",
      answers: ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"],
      endoAnswer: "a",
    },
    {
      id : 0,
      exerciseId: 3,
      question:
        "You are experiencing discomfort throughout your mouth due to plaque buildup in your teeth.",
      answers: ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"],
      perioAnswer: "a",
    },
  ];
  return questions.filter((items) => items.exerciseId === exerciseId);
}

export default function Home({exercises}) {
  const initialState = {
    isExerciseShown: false,
    exercideId: null,
    questions: [],
    isExerciseDone: false,
    score: 0
  };

  const [state, setState] = useState(initialState);
  const {isExerciseDone, isExerciseShown, questions, endoScore, perioScore, orthoScore} = state;

  const showExercise = (id) => {
    setState({
      ...state,
      exerciseId: id,
      questions: getQuestions(id),
      isExerciseShown: true,
    });
  };

  const hideExercise = () => {
    setState(initialState);
  };

  const finishTest = (endoScore, perioScore, orthoScore) => {
    setState({
      ...state,
      isExerciseDone: true,
      endoScore,
      perioScore,
      orthoScore,
    });
  };
  return (
    <>
      <Head>
        <title>torisutansan</title>
      </Head>

      <Navbar />

      <main className = {styles.main}>

        <div className = {styles.description}>
          <p>
            Welcome to the Biohack questionnaire. Our program will determine which type of specialist you should visit.
          </p>
        </div>

        <div className = {styles.code}>
                <main className="">
                    {!isExerciseShown ? (
                        <ExerciseList
                            exercises={exercises}
                            func={showExercise}
                        />
                    ) : isExerciseDone ? (
                        <div>
                            <p className="my-4">
                                Ortho Score: {orthoScore} {" "}
                                Endo Score: {endoScore} {" "}
                                Perio Score: {perioScore} {" "}
                            </p>

                            <button
                                className="flex items-center gap-1 bg-gray-400 p-2 rounded-sm shadow-md text-white"
                                onClick={hideExercise}
                            >
                                <span>
                                    <FaArrowLeft />
                                </span>
                                <span>Back</span>
                            </button>
                        </div>
                    ) : (
                        <Questions
                            questions={questions}
                            hideExercise={hideExercise}
                            finishTest={finishTest}
                        />
                    )}
                </main>
            </div>
        
        <Socials />

      </main>
  </>
  )
}