import React from 'react';
import App, { Container } from 'next/app';
import Router from 'next/router';

class myApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    console.log('ctx: ', ctx);
  
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
  
    return { pageProps };
  };
  
  componentDidMount() {
    console.log('233');
    Router.beforePopState((props) => {
      console.log('props: ', props);
    })
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default myApp;
