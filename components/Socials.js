import Link from 'next/link'
import styles from '@/styles/Home.module.css'

import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })

const Socials = () => {
    return (
        <div className = {styles.grid}>
          <a
            href = "https://linkedin.com/in/tristan-cai-b89571267"
            className = {styles.card}
            target = "_blank"
            rel = "noopener noreferrer"
          >
            <h2 className = {inter.className}>
              Contact <span> -&gt; </span>
            </h2>
            <p className = {inter.className}>
              LinkedIn Profile
            </p>
          </a>
        </div>
    );
}

export default Socials;