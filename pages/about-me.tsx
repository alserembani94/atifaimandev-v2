// Importing dependencies
import { GetStaticProps, NextPage } from 'next';

// Importing components
import { Layout, PUM } from 'components/Main';
import {
  AboutMyself,
  AboutStack
} from 'components/About';
import {
  HomeBMAC,
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

type AboutMeProps = {
  locale: any,
  locales: any,
};

const AboutMe: NextPage<AboutMeProps> = ({
  locale,
  locales,
}) => {  
  return (
    <Layout
      title="About Me"
    >
      <AboutMyself />
      <AboutStack />

      <HomeBMAC />
    </Layout>
  );
};

export default AboutMe;
