import { useData } from "@/hooks/useData";

export default async function technology() {
  const data = await useData("technology");
  return (
    <div>
      <h1>Data</h1>
      {data && <p>{JSON.stringify(data)}</p>}
    </div>
  );
}
