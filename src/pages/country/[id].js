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

          <div className={styles.details_panel}>
            <h4 className={styles.details_panel_heading}>Details</h4>

            <div className={styles.details_panel_row}>
              <div className={styles.details_panel_label}>Capital</div>
              <div className={styles.details_value}>{country.capital}</div>
            </div>

            <div className={styles.details_panel_row}>
              <div className={styles.details_panel_label}>Langauges</div>
              <div className={styles.details_value}>{country.languages.map(({name}) => name).join(", ")}</div>
            </div>

            <div className={styles.details_panel_row}>
              <div className={styles.details_panel_label}>Currencies</div>
              <div className={styles.details_value}>{country.currencies.map(({name}) => name).join(", ")}</div>
            </div>

            <div className={styles.details_panel_row}>
              <div className={styles.details_panel_label}>Native Name</div>
              <div className={styles.details_value}>{country.nativeName}</div>
            </div>

            <div className={styles.details_panel_row}>
              <div className={styles.details_panel_label}>Gini</div>
              <div className={styles.details_value}>{country.gini} %</div>
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