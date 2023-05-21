import Navbar from '../components/Navbar';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Socials from '@/components/Socials';

import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })

function Specialist() {
    return (
        <>
            <Navbar />
            <div className = {styles.main}>
                <div className = {styles.description}>
                <p> 
                    If you score above a 4 for any of the types of specialists, please make an appointment with one
                    of these dental offices.
                </p>
                </div>
                
            <div className={styles.grid}>
                <a
                    href="https://www.uvdentistry.com/"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                <h2 className={inter.className}>
                    General Dentist <span>-&gt;</span>
                </h2>
                <p className={inter.className}>
                    UV Dentistry
                </p>
                </a>

                <a
                    href="https://larsonortho.net/lp/free-consult/"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                <h2 className={inter.className}>
                    Orthodontist <span>-&gt;</span>
                </h2>
                <p className={inter.className}>
                    Larson Ortho
                </p>
                </a>

                <a
                    href="https://www.clearchoice.com/online-appointments/"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                <h2 className={inter.className}>
                    Periodontist <span>-&gt;</span>
                </h2>
                <p className={inter.className}>
                    Clear Choice
                </p>
                </a>
            </div>

            <div className={styles.grid}>
                <a
                    href="https://www.socalendo.com/"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                <h2 className={inter.className}>
                    Endodontist <span>-&gt;</span>
                </h2>
                <p className={inter.className}>
                    Izadi and Szeto
                </p>
                </a>

                <a
                    href="http://www.oralsurgeonriverside.com/"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                <h2 className={inter.className}>
                    Oral Surgeon <span>-&gt;</span>
                </h2>
                <p className={inter.className}>
                    Babak Aminpour DDS, Inc.
                </p>
                </a>

                <a
                    href="http://www.acedentalgroup.com/appointment-request/"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                <h2 className={inter.className}>
                    Prosthodontist <span>-&gt;</span>
                </h2>
                <p className={inter.className}>
                    Ace Dental Group
                </p>
                </a>
            </div>

            <div className = {styles.code}>
                Hopefully this fun test helps inform you of the possible choices you can make
                for your next consultation.
            </div>

            </div>

            <div className = {styles.description}>
              <a>
                <gmbbg>
                  <Image
                    src = "/images/teeth.jpg" 
                    alt = "" 
                    width = {300} 
                    height = {200} 
                  />
                </gmbbg>
              </a>
            </div>

            <br></br>

            <Socials />

        </>
    );
}

export default Specialist