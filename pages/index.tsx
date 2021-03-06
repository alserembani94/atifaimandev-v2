// Importing dependencies
import { GetStaticProps, NextPage } from 'next';
import { useEffect } from 'react';

// Importing components
import { Layout } from 'components/Main';
import {
  HomeTimeline,
  HomeBMAC,
  HomeHeadline,
} from 'components/Home';

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

type HomeProps = {
  locale: any,
  locales: any,
};

const Home: NextPage<HomeProps> = ({
  locale,
  locales,
}) => {
  useEffect(() => {
    // console.log(process.env.NODE_ENV);
    // console.log({locale, locales});
    console.log(`
    %cIf you are seeing this message, you are probably a programmer as well.
    And so to welcome a fellow programmer, I have to say that you are cool as well!
    `, "color: green;");
    console.log(`
    %cAWESOME!
    `, "font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)");
  }, []);

  return (
    <Layout
      title="Home"
    >
      <HomeHeadline />
      <HomeTimeline />
      <HomeBMAC />
    </Layout>
  )
}

export default Home;
