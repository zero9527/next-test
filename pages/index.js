import React, { useEffect } from 'react';
import Router, { withRouter } from 'next/router';
import Layout from '../components/Layout';
import Markdown from 'react-markdown';

const IndexPage = props => {
  console.log('index');

  useEffect(() => {
    console.log('load');
    // 路由拦截
    Router.beforePopState(({ url, as, options }) => {
      console.log('url: ', url);
      console.log('as: ', as);
      console.log('options: ', options);
      
      if (as === '/about') {
        console.log('about');
      }
      return false;
    });
  });

  return (
    <Layout>
      <h1>{props.router.query.title}</h1>
      <img src="/static/images/4k-wallpaper-alps-cold-2283757.jpg" />
      <div className="markdown">
        <Markdown
          source={`
  This is our blog post.
  Yes. We can have a [link](/link).
  And we can have a title as well.

  ### This is a title

  And here's the content.
      `}
        />
      </div>
      <style jsx global>{`
      img {
        width: 100%;
      }
      .markdown {
        font-family: 'Arial';
      }

      .markdown a {
        text-decoration: none;
        color: blue;
      }

      .markdown a:hover {
        opacity: 0.6;
      }

      .markdown h3 {
        margin: 0;
        padding: 0;
        text-transform: uppercase;
      }
    `}</style>
    </Layout>
  );
};

export default withRouter(IndexPage);
