import Link from 'next/link';
import Head from 'next/head';
import { withRouter } from 'next/router';
import { useEffect } from 'react';

const linkStyle = {
  marginRight: 15
};

const Header = props => {

  useEffect(() => {
    props.router.prefetch('/about');
  }, []);

  return (
    <div>
      <Head>
        <title>Next.js test</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/about?id=ahb" as="/about/ahb">
        <a style={linkStyle}>About</a>
      </Link>
      <Link href="/detail?id=123" as="/detail/123">
        <a style={linkStyle}>Detail</a>
      </Link>
    </div>
  )
};

export default withRouter(Header);
