import Head from 'next/head';
import { getUrlFromImage, API_URL } from '../../utils/urls';
import { twoDecimals } from '../../utils/format';

function Product({ product }) {
  return (
    <div>
      <Head>
        {product.meta_title && <title>{product.meta_title}</title>}
        {product.meta_description && (
          <meta name="description" content={product.meta_description} />
        )}
      </Head>
      <h3>{product.name}</h3>
      <img src={getUrlFromImage(product.image)} />
      <h4>{product.name}</h4>
      <p>${twoDecimals(product.price)}</p>
      <p>{product.content}</p>
    </div>
  );
}

export const getStaticPaths = async () => {
  //Fetch possible paths
  const products_req = await fetch(`${API_URL}/products/`);
  const products = await products_req.json();

  //Return paths to Next Context
  return {
    paths: products.map((product) => ({
      params: { slug: String(product.slug) },
    })),
    fallback: false, //This means show 404 if the params dnt exist
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const product_req = await fetch(`${API_URL}/products/?slug=${slug}`);
  const product = await product_req.json();

  return {
    props: {
      product: product[0], //product[0] because API returns that as an array
    },
  };
};

export default Product;
