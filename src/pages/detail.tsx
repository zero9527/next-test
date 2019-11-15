import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Layout from '@/components/layout';
import styles from '@/styles/detail.scss';

function Detail() {
  const router = useRouter();

  useEffect(() => {
    // console.log('detail mount!');
    // console.log('router: ', props.router);
    // 正常路由跳转，在about页面获取路由信息的时候，id为a11，
    // 刷新页面则id为asss，所以尽量二者一致，避免不必要的问题
    // setTimeout(() => props.router.push('/about?id=a11', '/about/asss'), 1000);
    return () => {
      // console.log('detail unmount!');
    }
  }, []);
  
  return (
    <Layout>
      <Head>
        <title>Detail</title>
      </Head>
      <p className={styles.detail}>This is the detail page!</p>
      id: { router.query.id }
    </Layout>
  );
}

Detail.getInitialProps = async function(context: any) {
  /**
   * 在当前路由刷新的话，context.req 为真，服务端才有 req/res，在命令行打印 'title: server'；
   * 如果是其他路由跳转过来没有刷新页面的话，context.req 为假，在浏览器控制台打印,
   * 此时 document.title 是 跳转之前的页面 title；
   */
  console.log('title: ', context.req ? 'server' : document.title);

  // console.log('context: ', context);

  return {
    data: 'detail'
  };
}

export default Detail;
