import Navbar from '../components/Navbar'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Socials from '@/components/Socials';

function About() {
    return (
        <>
            <Navbar />
            <main className = {styles.main}>
                <div className = {styles.description}>
                    <h1> The purpose of our project. </h1> 
                </div>
                <div className = {styles.description}>
                    <p>
                        The purpose of our project is to create a multiple choice test to determine who might be the best specialist to visit near UCR.
                    </p>
                </div>

                <Socials />
            </main>

            
        </>
    );
}

export default About