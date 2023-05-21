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
      generalAnswer: true,
    },
    {
      id : 0,
      exerciseId: 0,
      question:
        "The alignment and positioning of your teeth and jaws is causing discomfort in your teeth.",
      answers: ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"],
      orthoAnswer: true,
    },
    {
      id : 0,
      exerciseId: 0,
      question:
        "You are seeking treatment for any gum diseases related issues, such as sensitivity or decay.",
      answers: ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"],
      perioAnswer: true,
    },
    {
      id : 0,
      exerciseId: 0,
      question:
        "You have irritating pain inside the soft layer of your tooth (pulp) that needs to be disinfected immediately, necessitating endodontic treatment.",
      answers: ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"],
      endoAnswer: true,
    },
    {
      id : 0,
      exerciseId: 0,
      question:
        "You are experiencing pain throughout your teeth due to pathological conditions.",
      answers: ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"],
      oralAnswer: true,
    },
    {
      id : 0,
      exerciseId: 0,
      question:
        "You have missing or damaged teeth that need to be replaced or repaired.",
      answers: ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"],
      prosthoAnswer: true,
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
  const {isExerciseDone, isExerciseShown, questions, endoScore, perioScore, orthoScore, oralScore, prosthoScore, generalScore, totalScore} = state;

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

  const finishTest = (endoScore, perioScore, orthoScore, oralScore, prosthoScore, generalScore, totalScore) => {
    setState({
      ...state,
      isExerciseDone: true,
      endoScore,
      perioScore,
      orthoScore,
      oralScore,
      prosthoScore,
      generalScore,
      totalScore,
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
            Welcome to the Dental Specialist questionnaire. Our program is designed to help assist you in making an informed choice
            when consulting your general dentist about what type of dental specialist you may want to speak to.
          </p>
        </div>

        <div className = {styles.code}>
                <main className="">
                    {
                    !isExerciseShown ? 
                    (
                        <ExerciseList
                            exercises={exercises}
                            func={showExercise}
                        />
                    ) : 
                    
                    isExerciseDone ? 
                    (
                        <div>
                            <p className="my-4">
                                Ortho Score: {orthoScore} {"\n"} <br></br>
                                Endo Score: {endoScore} {"\n"} <br></br>
                                Perio Score: {perioScore} {"\n"} <br></br>
                                Oral Score: {oralScore} {"\n"} <br></br>
                                Prostho Score: {prosthoScore} {"\n"} <br></br>
                                General Score: {generalScore} {"\n"} <br></br> <br></br>
                                Your score from {totalScore} questions.
                            </p>
                            
                            <a>
                              If you score a 4 or above for any of the following, please click the link below. <br></br>
                            </a>

                            <br></br>

                            <div className={styles.grid}>
                              <a
                              href="/specialists"
                              className={styles.card}
                              target="_blank"
                              rel="noopener noreferrer"
                              >
                              <p className="flex items-center bg-gray-300 p-2 text-black">
                                Specialists <span>-&gt;</span>
                              </p>
                              </a>
                            </div>
                            
                            <br></br>

                            <button
                                className="flex items-center gap-1 bg-gray-400 p-2 rounded-sm shadow-md text-white"
                                onClick={hideExercise}
                            >
                                <span>
                                    <FaArrowLeft />
                                </span>
                                <span> Return </span>
                            </button>
                        </div>
                    ) : (
                        <Questions
                            questions = {questions}
                            hideExercise = {hideExercise}
                            finishTest = {finishTest}
                        />
                    )}
                </main>
            </div>
        
        <Socials />

      </main>
  </>
  )
}