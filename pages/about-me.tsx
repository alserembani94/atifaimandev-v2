// Importing dependencies
import { GetStaticProps, NextPage } from 'next';
import { useEffect } from 'react';

// Importing stylesheets
// import styles from 'styles/Home.module.scss';

// Importing components
import { Layout, PUM } from 'components/Main';
import {
  HomeBanner,
} from 'components/Home';

const socmedSize = "36px";

export const getStaticProps: GetStaticProps = async (ctx: any) => {
  const {
    locale,
    locales,
  } = ctx;

  return {
    props: {
      locale,
      locales,
    },
  };
};

type AboutMeProps = {
  locale: any,
  locales: any,
};

const AboutMe: NextPage<AboutMeProps> = ({
  locale,
  locales,
}) => {
  useEffect(() => {
    // console.log(process.env.NODE_ENV);
    console.log({locale, locales});
  }, []);
  
  return process.env.NODE_ENV === 'production' ? (
    <Layout
      title="About Me Under Construction"
      alignment="centered"
    >
      <PUM title="✨ Exciting portfolio is underway! ✨"/>
    </Layout>
  ) : (
    <Layout
      title="About Me"
    >
    </Layout>
  )
}

export default AboutMe;
