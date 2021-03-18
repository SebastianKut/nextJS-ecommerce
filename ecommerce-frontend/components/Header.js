import { useContext } from 'react';
import styles from '../styles/Header.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AuthContext from '../context/AuthContext';

function Header() {
  const router = useRouter();
  const isHome = router.pathname === '/';

  const { user } = useContext(AuthContext);

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

      <div className={styles.auth}>
        {user ? (
          <Link href="/account">
            <a>{user.email}</a>
          </Link>
        ) : (
          <Link href="/login">
            <a>Log In</a>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
Header;
