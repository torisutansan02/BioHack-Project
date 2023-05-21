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
                    <h1> Our project is made by a group of future engineers at UCR. Our mission is to inform the audience of
                        some of the choices they can make. We are not experts in dentistry but our goal is to educate students
                        at UCR of the decisions they can make with their doctors. </h1> 
                </div>
                <div className = {styles.description}>
                    <p>
                        The purpose of our project is to create a multiple choice test to determine who might be the best Dental specialist to visit near UCR.
                        Our algorithm is based on a point system. We use a test similar to the MBTI for patients to make informed decisions when consulting their
                        general dentist. The scoring system is based on the severity of pain the patient is experiencing. Some questions will give points for
                        multiple different categories. If you score a 3.5 or higher, you may want to call a specialist and ask for advice.
                    </p>
                </div>

                <Socials />
            </main>

            
        </>
    );
}

export default About