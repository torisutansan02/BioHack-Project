import Link from 'next/link'
import styles from '@/styles/Home.module.css'

const QuizStart = () => {
    return (
        <div className = {styles.navbar}>
            <h1> Biohack Competition </h1>
            <div className = {styles.links}>
                <Link href = "/"> Home </Link>
                <Link href = "/about" > About </Link>
                <Link href = "/socials"> Contact </Link>
            </div>
        </div>
    );
}

export default QuizStart;