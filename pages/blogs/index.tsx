// Importing dependencies
import { GetStaticProps, NextPage } from 'next';
import { useEffect } from 'react';

// Importing stylesheets
// import styles from 'styles/Home.module.scss';

// Importing components
import { Layout, PUM } from 'components/Main';

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

type BlogsProps = {
  locale: any,
  locales: any,
};

const Blogs: NextPage<BlogsProps> = ({
  locale,
  locales,
}) => {
  useEffect(() => {
    // console.log(process.env.NODE_ENV);
    console.log({locale, locales});
  }, []);

  return process.env.NODE_ENV === 'production' ? (
    <Layout
      title="Blogs Under Construction"
      alignment="centered"
    >
      <PUM title="✨ Exciting portfolio is underway! ✨"/>
    </Layout>
  ) : (
    <Layout
      title="Blogs"
    >
    </Layout>
  )
}

export default Blogs;
