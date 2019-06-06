import dynamic from 'next/dynamic';
import Head from 'next/head';
import Layout from '../components/Layout';

const AboutContent = () => <p>This is the about page</p>;
const Hello = dynamic(
  () => import('../components/Hello.js'),
  {
    loading: () => <p>...</p>,
    ssr: false // 不加这个的话，刷新就没了。。。
  }
);

export default function About() {
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