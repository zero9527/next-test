import * as React from 'react';
import { NextComponentType } from "next";
import { RouterProps } from 'next/router';
import App, { Container, DefaultAppIProps } from 'next/app';

interface Props {
  Component: NextComponentType,
  pageProps: DefaultAppIProps,
  router: RouterProps,
  [prop: string]: any // 任意字段，任意类型
}

interface State {
  [prop: string]: any // 任意字段，任意类型
}

interface initialProps {
  Component: NextComponentType, 
  ctx: any
}

class myApp extends App<Props, State> {
  static async getInitialProps({ Component, ctx }: initialProps) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
  
    return { pageProps };
  };

  public constructor(props: Props) {
    super(props);
  }
  
  public componentDidUpdate() {
    console.log('router: ', this.props.router);
  }
  
  public componentDidMount() {
    console.log('router: ', this.props.router);
  }

  public render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default myApp;
