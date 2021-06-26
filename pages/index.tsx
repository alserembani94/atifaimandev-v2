// Importing dependencies
import Link from 'next/link';
import { GetStaticProps, NextPage } from 'next';
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoGithub,
  IoLogoBehance,
  IoLogoLinkedin,
  IoLogoMedium,
} from 'react-icons/io5';
import {
  FaDev,
} from 'react-icons/fa';

// Importing stylesheets
import styles from 'styles/Home.module.scss';

// Importing components
import Layout from 'components/Layout';

const socmedSize = "36px";

export const getStaticProps: GetStaticProps = async (ctx: any) => {
  return {
    props: {},
  };
};

const Home: NextPage = () => {
  return (
    <Layout
      title="Home"
    >
      <h1 className={styles.icon}>🚧</h1>
      <p>✨ Exciting portfolio is underway! ✨</p>

      <div className={styles.seperator} />
      <p>How about connecting to my social media?</p>
      <div className={styles.cta}>
        
        <Link href="/twitter">
          <a target="_blank" id="twitter" className={styles.twitter}>
              <IoLogoTwitter size={socmedSize} />
          </a>
        </Link>
        
        <Link href="/facebook">
          <a target="_blank" id="facebook" className={styles.facebook}>
              <IoLogoFacebook size={socmedSize} />
          </a>
        </Link>
        
        <Link href="/behance">
          <a target="_blank" id="behance" className={styles.behance}>
              <IoLogoBehance size={socmedSize} />
          </a>
        </Link>
        
        <Link href="/github">
          <a target="_blank" id="github" className={styles.github}>
              <IoLogoGithub size={socmedSize} />
          </a>
        </Link>
        
        <Link href="/linkedin">
          <a target="_blank" id="linkedin" className={styles.linkedin}>
              <IoLogoLinkedin size={socmedSize} />
          </a>
        </Link>
                    
        <Link href="/medium">
          <a target="_blank" id="medium" className={styles.medium}>
            <IoLogoMedium size={socmedSize} />
          </a>
        </Link>
        
        <Link href="/devto">
          <a target="_blank" id="devto" className={styles.devto}>
              <FaDev size={socmedSize} />
          </a>
        </Link>

      </div>
    </Layout>
  )
}

export default Home;
