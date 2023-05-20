import Navbar from '../components/Navbar'
import styles from '@/styles/Home.module.css'

function About() {
    return (
        <>
            <Navbar />
            <main className = {styles.main}>
                <div className = {styles.description}>
                    <h1> The purpose of our project. </h1> 
                    <p>
                        The purpose of our project is to create a multiple choice test to determine who might be the best specialist to visit near UCR.
                    </p>
                </div>

                <div className = {styles.grid}>
          <a
            href = "https://linkedin.com/in/tristan-cai-b89571267"
            className = {styles.card}
            target = "_blank"
            rel = "noopener noreferrer"
          >
            <h2 className = {styles.className}>
              Employment <span> -&gt; </span>
            </h2>
            <p className = {styles.className}>
              LinkedIn Profile
            </p>
          </a>

          <a
            href = "https://last.fm/user/luckifier"
            className = {styles.card}
            target = "_blank"
            rel = "noopener noreferrer"
          >
            <h2 className = {styles.className}>
              LastFM <span> -&gt; </span>
            </h2>
            <p className = {styles.className}>
              音楽聞いています
            </p>
          </a>

          <a
            href = "https://rateyourmusic.com/~torisutan"
            className = {styles.card}
            target = "_blank"
            rel = "noopener noreferrer"
          >
            <h2 className = {styles.className}>
              RYM <span> -&gt; </span>
            </h2>
            <p className = {styles.className}>
              RYM Profile
            </p>
          </a>

          <a
            href = "https://instagram.com/torisutansan?igshid=ZDdkNTZiNTM="
            className = {styles.card}
            target = "_blank"
            rel = "noopener noreferrer"
          >
            <h2 className = {styles.className}>
              IG <span> -&gt; </span>
            </h2>
            <p className = {styles.className}>
              Instagram Profile
            </p>
          </a>
        </div>
            </main>
        </>
    );
}

export default About