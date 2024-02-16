async function getData() {
  try {
    const response = await fetch(`${process.env.HOST_ADDRESS}/data.json`);
    const data = await response.json();
    return { props: { data, name: "success" } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { data: null } }; // or handle error accordingly
  }
}

export default async function Planets() {
  const data = await getData();

  console.log(data);
  return (
    <div>
      <h1>Data</h1>
      {data && <p>{JSON.stringify(data)}</p>}
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`./data.json`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
