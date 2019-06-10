import Head from 'next/head';
import { withRouter } from 'next/router';
import { useEffect, useState, useMemo, useCallback } from 'react';
import Layout from '../components/Layout';

const Content = () => <p>This is the detail page</p>;

function Detail(props) {

  useEffect(() => {
    console.log('detail mount!');
    // console.log('router: ', props.router);
    // 正常路由跳转，在about页面获取路由信息的时候，id为a11，
    // 刷新页面则id为asss，所以尽量二者一致，避免不必要的问题
    // setTimeout(() => props.router.push('/about?id=a11', '/about/asss'), 1000);
    return () => {
      console.log('detail unmount!');
    }
  }, []);

  // const [count, setCount] = useState(0);
  // const [num, setNum] = useState(0);

  // 依赖项 num 不变化的话 会执行，但是不会 return一个新的 count，即使 count 变化了
  // const memorized1 = useCallback(() => {
  //   console.log('memorized1: ', count);
  //   return count;
  // }, [count])();
  
  // 依赖项 num 不变化的话 不执行
  // const memorized2 = useMemo(() => {
  //   console.log('memorized2: ', count);
  //   return count;
  // }, [num]);
  
  return (
    <Layout>
      <Head>
        <title>Detail</title>
      </Head>
      <Content />
      <section>
        {/* <p>{memorized1}</p>
        <p>{memorized2}</p>
        <button onClick={() => setCount(count+1)}>count++</button> */}
      </section>
    </Layout>
  );
}

Detail.getInitialProps = async function(context) {
  /**
   * 在当前路由刷新的话，context.req 为真，服务端才有 req/res，在命令行打印 'title: server'；
   * 如果是其他路由跳转过来没有刷新页面的话，context.req 为假，在浏览器控制台打印,
   * 此时 document.title 是 跳转之前的页面 title；
   */
  console.log('title: ', context.req ? 'server' : document.title);

  // console.log('context: ', context);

  return {};
}

export default withRouter(Detail);
