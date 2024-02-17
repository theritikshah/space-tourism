import { useData } from "@/hooks/useData";

export default async function Destinations() {
  const data = await useData("destinations");
  return (
    <div>
      <h1>Data</h1>
      {data && <p>{JSON.stringify(data)}</p>}
    </div>
  );
}
