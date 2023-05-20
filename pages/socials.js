import Navbar from '../components/Navbar'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

function Socials() {
    return (
        <>
            <Navbar />
            <main className = {styles.main}>

                <div className = {styles.description}>
                <h1> Our LinkedIn accounts. </h1>   

                <div className = {styles.grid}>
                    <div className = {styles.links}>
                        <a
                            href = "https://linkedin.com/in/tristan-cai-b89571267"
                            className = {styles.card}
                            target = "_blank"
                            rel = "noopener noreferrer"
                        >
                        <h2>
                            Tristan <span> -&gt; </span>
                        </h2>
                        </a>
                    </div>
                </div>

                </div>

            </main>
        </>
    );
}

export default Socials