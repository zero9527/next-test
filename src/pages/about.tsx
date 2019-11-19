import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';
import Layout from '@/components/layout';
import styles from '@/styles/about.scss';

const Hello = dynamic(
  () => import('../components/hello-world/index'),
  { loading: () => <p>...</p> }
);

const { useEffect } = React;

function About() {
  useEffect(() => {
    fetch('/userInfo').then(res => res.json())
    .then(res => {
      console.log('fetch: ', res);
    })
  }, []);

  return (
    <Layout>
      <Head>
        <title>about</title>
      </Head>
      <p className={styles.about}>This is the about page</p>
      <Hello />
    </Layout>
  );
}

// About.getInitialProps = async function(context: any) {
//   return {
//     data: 'about'
//   };
// }

export default About;
