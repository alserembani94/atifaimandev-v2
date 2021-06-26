// Importing dependencies
import Link from 'next/link';
import { GetStaticProps, NextPage } from 'next';
import { IconContext } from 'react-icons';
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoGithub,
  IoLogoBehance,
  IoLogoLinkedin,
} from 'react-icons/io5'

// Importing stylesheets
import styles from 'styles/Home.module.scss';

// Importing components
import Layout from 'components/Layout';

const socmedSize = "2rem";

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
          <a target="_blank" id="twitter">
            <IconContext.Provider value={{ className: styles.cta_twitter }}>
              <IoLogoTwitter size={socmedSize} />
            </IconContext.Provider>
          </a>
        </Link>
        
        <Link href="/facebook">
          <a target="_blank" id="facebook">
            <IconContext.Provider value={{ className: styles.cta_facebook }}>
              <IoLogoFacebook size={socmedSize} />
            </IconContext.Provider>
          </a>
        </Link>
        
        <Link href="/behance">
          <a target="_blank" id="behance">
            <IconContext.Provider value={{ className: styles.cta_behance }}>
              <IoLogoBehance size={socmedSize} />
            </IconContext.Provider>
          </a>
        </Link>
        
        <Link href="/github">
          <a target="_blank" id="github">
            <IconContext.Provider value={{ className: styles.cta_github }}>
              <IoLogoGithub size={socmedSize} />
            </IconContext.Provider>
          </a>
        </Link>
        
        <Link href="/linkedin">
          <a target="_blank" id="linkedin">
            <IconContext.Provider value={{ className: styles.cta_linkedin }}>
              <IoLogoLinkedin size={socmedSize} />
            </IconContext.Provider>
          </a>
        </Link>

      </div>
    </Layout>
  )
}

export default Home;
