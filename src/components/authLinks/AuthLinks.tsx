import React from 'react';
import styles from './authLinks.module.css';
import Link from 'next/link';

const AuthLinks = () => {
  // temp

  const status = 'unauthenticated';

  return (
    <>
      {status === 'unauthenticated' ? (
        <Link href='/login' className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href='/write' className={styles.link}>
            Write
          </Link>
          <span className={styles.link}>
            Logout
          </span>
        </>
      )}
    </>
  );
};

export default AuthLinks;
