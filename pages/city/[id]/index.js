export async function getServerSideProps({ query }) {
  const { id } = query;

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${id}&appid=00b976e91b2b6e21b881af1759eb0249`
  );

  const data = await res.json();

  return {
    props: { data },
  };
}

export default function City({ data }) {
  console.log(data);
  return <div>bok ye</div>;
}
