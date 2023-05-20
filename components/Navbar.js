import Link from 'next/link'
import styles from '@/styles/Home.module.css'

const Navbar = () => {
    return (
        <div className = {styles.navbar}>
            <h1> Biohack Competition </h1>
            <div className = {styles.links}>
                <Link href = "/"> Home </Link>
                <Link href = "/about" > About </Link>
                <Link href = "/contact"> Contact </Link>
            </div>
        </div>
    );
}

export default Navbar;