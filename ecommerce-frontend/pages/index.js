import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

import { getUrlFromImage, API_URL } from '../utils/urls';
import { twoDecimals } from '../utils/format';

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {products.map((product) => (
        <div key={product.id} className={styles.product}>
          <Link href={`/products/${product.slug}`}>
            <a>
              <div className={styles.product__Row}>
                <div className={styles.product__ColImg}>
                  <img src={getUrlFromImage(product.image)} alt="" />
                </div>
                <div className={styles.product__Col}>
                  {product.name} ${twoDecimals(product.price)}
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}

//Make a static page and fetch data from strapi API
export const getStaticProps = async () => {
  //Fetch data
  const products_req = await fetch(`${API_URL}/products/`);
  const products = await products_req.json();

  //Return data as props that can be passed to Home page component
  return {
    props: {
      products,
    },
  };
};

//finished 43:30 https://www.youtube.com/watch?v=385cpCpGRC0&t=206s
//Sprawdzic dokladnie jak dziala get static Paths - skad next wie ktory slug rzucic do fetch url - ogladnac crash course traversy media o tym
