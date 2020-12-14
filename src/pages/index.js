import Head from 'next/head'
import { useState } from 'react';
import CountriesTable from '../components/CountriesTable/CountriesTable';
import Layout from '../components/layout/Layout';
import SearchInput from "../components/SearchInput/SearchInput";
import styles from '../styles/Home.module.css';

export default function Home({ countries }) {
  console.log("IN Home", countries);

  const [keyword, setKeyword] = useState("");

  const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(keyword.toLowerCase()) || country.region.toLowerCase().includes(keyword.toLowerCase()) || country.subregion.toLowerCase().includes(keyword.toLowerCase()));
    
  

  const onInputChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value);
  }

  return (
   <Layout>
    <div className={styles.counts}>Found {countries.length} countries</div>

    <SearchInput 
      placeholder="Filter by Name, Region or SubRegion" 
      onChange={onInputChange}
    />
    <CountriesTable countries={filteredCountries}/>
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
