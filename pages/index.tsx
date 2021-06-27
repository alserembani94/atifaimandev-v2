// Importing dependencies
import { GetStaticProps, NextPage } from 'next';

// Importing stylesheets
// import styles from 'styles/Home.module.scss';

// Importing components
import Layout from 'components/Layout';
import PUM from 'components/PUM';

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
      {/* <PUM title="✨ Exciting portfolio is underway! ✨"/> */}
    </Layout>
  )
}

export default Home;
