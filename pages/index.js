import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function Home() {
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
      </main>
  </>
  )
}