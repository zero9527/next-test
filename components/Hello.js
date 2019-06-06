import Router from 'next/router';

const Hello = () => <div>Hello Next.js</div>;

// 路由拦截
Router.beforePopState(({ url, as, options }) => {
  console.log('url: ', url);
  console.log('as: ', as);
  console.log('options: ', options);
  
  if (as === '/about') {
    console.log('about');
  }
  return true;
});

export default Hello;
