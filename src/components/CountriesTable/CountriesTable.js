import { KeyboardArrowDownRounded, KeyboardArrowUpRounded } from "@material-ui/icons";
import { useState } from "react";
import Link from "next/link";
import styles from "./Countries.module.css";

const orderBy = (countries, value, direction) => {
  if (direction === "asc") {
    return [...countries].sort((a, b) => (a[value] > b[value] ? 1 : -1));
  }

  if (direction === "desc") {
    return [...countries].sort((a, b) => (a[value] > b[value] ? -1 : 1));
  }

  // by default
  return countries;
}

// COMPONENT
const SortArrow = ({ direction }) => {
  if (!direction) {
    return <></>; // return nothing
  }

  if (direction === "desc") {
    return (
      <div className={styles.heading_arrow}>
        <KeyboardArrowDownRounded color="inherit" />
      </div>
    )
  } else {
    return (
      <div className={styles.heading_arrow}>
      <KeyboardArrowUpRounded color="inherit" />
    </div>
    )
  }
}

const CountriesTable = ({countries}) => {
  const [direction, setDirection] = useState(null);
  const [value, setValue] = useState(null);

  const orderedCountries = orderBy(countries, value, direction);

  const switchDirection = () => {
    if (!direction) {
      setDirection("desc") // null -> desc
    } else if (direction === "desc") {
      setDirection("asc") // desc -> asc
    } else {
      setDirection(null) // asc -> null
    }
  }

  const setValueAndDirection = (value) => {
    switchDirection();
    setValue(value)
  }

  return (
    <div>
        <div className={styles.heading}>
        <button 
          className={styles.heading_name}
          onClick={() => setValueAndDirection("name")}
        >
          <div>Name</div>
          <SortArrow direction={direction} />
          
        </button>
        <button 
          className={styles.heading_population}
          onClick={() => setValueAndDirection("population")}
        >
          <div>Population</div>
          <SortArrow direction={direction} />
        </button>
      </div>

        {orderedCountries.map((country,idx) => (
          <Link key={country+idx} href={`/country/${country.alpha3Code}`}>
            <div className={styles.row}>
              <div className={styles.name}>{country.name}</div>
              <div className={styles.population}>{country.population}</div>
            </div>
          </Link>
        ))} 
    </div>
   
  )
}

export default CountriesTable;