import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

import Link from 'next/link'
import Navbar from '../components/Navbar'
import { useState } from "react";
import ExerciseList from '@/components/exerciseList'

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
  const hideExercise = () => {}
  const finishTest = () => {}
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
          <div> Score Result </div>
        ) : (
          //<div> Questions </div>
          <Questions questions = {questions}/>
        )}
      </main>
  </>
  )
}