import React from 'react';
import Link from 'next/link';

const error = () => (
  <div>
    <h1>Something went wrong.</h1>
    <p>
      Try going back <Link href="/">to try again</Link>
    </p>
  </div>
);

export default error;
