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

  return (
    <div>
      <h1>Data</h1>
      {data && <p>{JSON.stringify(data)}</p>}
    </div>
  );
}
