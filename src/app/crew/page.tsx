import { useData } from "@/hooks/useData";

export default async function Crew() {
  const data = await useData("crew");
  return (
    <div>
      <h1>Data</h1>
      {data && <p>{JSON.stringify(data)}</p>}
    </div>
  );
}
