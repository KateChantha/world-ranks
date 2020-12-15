import Layout from "../../components/layout/Layout";
import styles from "./country.module.css"

const Country = ({ country }) => {
  console.log("in [id]- Country", country)

  return (
    <Layout title={country.name}>
      <div>
        <div className={styles.overview_panel}>
          <img src={country.flag} alt={country.name}/>
          <h1 className={styles.overview_name}>{country.name}</h1>
          <div className={styles.overview_region}>{country.region}</div>

          <div className={styles.overview_data}>
            <div className={styles.overview_population}>
              <div className={styles.overview_value}>{country.population}</div>
              <div className={styles.overview_label}>Population</div>
            </div>
            <div className={styles.overview_area}>
              <div className={styles.overview_value}>{country.area}</div>
              <div className={styles.overview_label}>Area</div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  )
}

export default Country;
/** whenever we visit the page, fetch data in the server before we render it */
export const getServerSideProps = async ({ params }) => {
  const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${params.id}`);
  const country = await res.json();

  return {
    props: {
      country,
    }
  }
}