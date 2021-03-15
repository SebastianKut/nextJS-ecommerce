import Head from 'next/head';
import styles from '../styles/Home.module.css';

import products from '../products.json';
import { getUrlFromImage } from '../utils/urls';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {products.map((product) => (
        <div key={product.id} className={styles.product}>
          <div className={styles.product__Row}>
            <div className={styles.product__ColImg}>
              <img src={getUrlFromImage(product.image)} alt="" />
            </div>
            <div className={styles.product__Col}>
              {product.name} {product.price}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

//finished 23:33 https://www.youtube.com/watch?v=385cpCpGRC0&t=206s
