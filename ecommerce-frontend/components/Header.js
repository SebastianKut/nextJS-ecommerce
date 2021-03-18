import React from 'react';
import styles from '../styles/Header.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Header() {
  const router = useRouter();
  const isHome = router.pathname === '/';

  const goBack = (e) => {
    e.preventDefault();
    router.back();
  };

  return (
    <div className={styles.nav}>
      {!isHome && (
        <a className={styles.nav__back} href="#" onClick={goBack}>
          {'<'} Back
        </a>
      )}
      <Link href="/">
        <a>
          <h1 className={styles.title}>The E-Commerce</h1>
        </a>
      </Link>
    </div>
  );
}

export default Header;
Header;
