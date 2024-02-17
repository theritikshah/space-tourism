import { useData } from "@/hooks/useData";
import { redirect } from "next/navigation";

export default async function Destinations() {
  const data = await useData("destinations");

  if (data && data?.length) {
    redirect(`/destination/${data[0].name}`);
  } else {
    redirect("/");
  }

  return <></>;
}
