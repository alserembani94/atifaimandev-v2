// Importing dependencies
import { GetStaticProps, NextPage } from 'next';
import { useEffect } from 'react';

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
  useEffect(() => {
    console.log(process.env.NODE_ENV);
  }, [])
  return process.env.NODE_ENV === 'production' ? (
    <Layout
      title="Home"
    >
      <PUM title="✨ Exciting portfolio is underway! ✨"/>
    </Layout>
  ) : (
    <Layout
      title="Home"
    >
      <p>Hello</p>
    </Layout>
  )
}

export default Home;
