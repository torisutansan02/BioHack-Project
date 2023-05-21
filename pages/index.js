import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

import Link from 'next/link'
import Navbar from '../components/Navbar'
import { useState } from "react";
import ExerciseList from '@/components/exerciseList'
import Questions from '@/Questions/question'

export function getServerSideProps() {
  const exercises = [
    { title: "Dental Specialists", id: 0}
  ];
  return {
    props: {
      exercises,
    },
  }
}

export function getQuestions (exerciseId) {
  const questions = [
  ];
  return questions.filter((items) => items.exerciseId === exerciseId);
}

export default function Home(exercises) {
  const initialState = {
    isExerciseShown: false,
    exercideId: null,
    questions: [],
    isExerciseDone: false,
    score: 0
  }
  const [state, setState] = useState(initialState);
  const {isExerciseDone, exerciseId, isExerciseShown, questions, score} = state;

  const showExercise = (id) => {
    setState({
      ...state,
      exerciseId: id,
      questions: getQuestions(id),
      isExerciseShown: true,
    })
  }
  const hideExercise = () => {
    setState(initialState)
  };
  const finishTest = (score) => {
    setState({
      ...state,
      isExerciseDone: true,
      score,
    })
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

        <div className = {styles.description}>
          <a>
            We will periodically update this page..
          </a>
        </div>

        {!isExerciseShown ? (
          <ExerciseList />
        ) : isExerciseDone ? (
          <div> 
            <p className = "my-4">
              Score = {score} / {questions.length} {" "}
            </p> 

            <button onClick = {() => hideExercise()} className = "flex items-center gap-1 bg-gray-400 p-2 rounded-sm shadow-md text-white">
              <span>
                <FaArrowLeft />
              </span>
              <span> Back </span>
            </button>
          </div>
        ) : (
          //<div> Questions </div>
          <Questions
           questions = {questions}
           hideExercise = {hideExercise}
          finishTest = {finishTest}/>
        )}
      </main>
  </>
  )
}