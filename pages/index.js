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
            This is our project for the Biohack competition.
          </p>
        </div>

        <div className = {styles.description}>
          <a>
            We will periodically update this page..
          </a>
        </div>

        <div className = {styles.description}>
          <a>
            <gmbbg>
              <Image
                src = "/images/IMG_0390.png" 
                alt = "" 
                width = {300} 
                height = {200} 
              />
            </gmbbg>
          </a>
        </div>
      </main>
  </>
  )
}