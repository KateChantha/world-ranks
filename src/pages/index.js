import Head from 'next/head'
import Layout from '../components/layout/Layout';
import styles from '../styles/Home.module.css';

export default function Home({ countries }) {
  console.log("IN Home", countries);
  return (
   <Layout>
    <div className={styles.counts}>Found {countries.length} countries</div>
   </Layout>
  );
}

/*https://nextjs.org/docs/basic-features/data-fetching */
// get all the data at the build time
export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await res.json();

  return {
    props: {
      countries,
    },
  };
};
