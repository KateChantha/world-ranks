const Country = ({ country }) => {
  console.log("in [id]- Country", country)

  return (
    <div>Country</div>
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