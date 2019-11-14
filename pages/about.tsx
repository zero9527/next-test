import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';
import Layout from '@/components/layout';

const Hello = dynamic(
  () => import('../components/hello-world/index'),
  { loading: () => <p>...</p> }
);

function About() {
  return (
    <Layout>
      <Head>
        <title>about</title>
      </Head>
      <Hello />
      <p>This is the about page</p>
    </Layout>
  );
}

// About.getInitialProps = async function(context: any) {
//   return {
//     data: 'about'
//   };
// }

export default About;
