import styles from "./Countries.module.css";

const orderBy = (countries, direction) => {
  if (direction === "asc") {
    return [...countries].sort((a, b) => (a.population > b.population ? 1 : -1));
  }

  if (direction === "desc") {
    return [...countries].sort((a, b) => (a.population > b.population ? -1 : 1));
  }

  // by default
  return countries;
}

const CountriesTable = ({countries}) => {
  const orderedCountries = orderBy(countries, "desc");

  return (
    <div>
        <div className={styles.heading}>
        <button className={styles.heading_name}>
          <div>Name</div>
        </button>
        <button className={styles.heading_population}>
          <div>Population</div>
        </button>
      </div>

        {orderedCountries.map((country,idx) => (
          <div key={country+idx} className={styles.row}>
            <div className={styles.name}>{country.name}</div>
            <div className={styles.population}>{country.population}</div>
          </div>
        ))} 
    </div>
   
  )
}

export default CountriesTable;