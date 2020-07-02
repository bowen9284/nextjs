import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';

const IndexPage = (props) => (
  <div>
    <h1>The Main Page</h1>
    <p>
      Go to <Link href="auth">Auth </Link>
      {props.appName}
    </p>
    <button onClick={() => Router.push('/auth')}>Go to Auth</button>
  </div>
);

IndexPage.getInitialProps =  async (context) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ appName: 'example app' });
    }, 1000);
  });
  return promise;
};

export default IndexPage;
