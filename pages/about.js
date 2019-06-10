import dynamic from 'next/dynamic';
import Head from 'next/head';
import { withRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from '../components/Layout';

const AboutContent = () => <p>This is the about page</p>;
const Hello = dynamic(
  () => import('../components/Hello.js'),
  {
    loading: () => <p>...</p>,
    ssr: false // 不加这个的话，刷新就没了。。。
  }
);

function About(props) {

  // useEffect(() => {
  //   console.log(props.router);
  // }, []);

  return (
    <Layout>
      <Head>
        <title>about</title>
      </Head>
      <Hello />
      <AboutContent />
    </Layout>
  );
}

// About.getInitialProps = async function(context) {
//   console.log('context: ', context);
//   return {};
// }

export default withRouter(About);
