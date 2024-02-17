type key = "destinations" | "crew" | "technology";

export async function useData(key: key) {
  try {
    const response = await fetch(`${process.env.HOST_ADDRESS}/data.json`);
    const data = await response.json();
    return data[key];
  } catch (error) {
    console.error("Error fetching data:", error);
    return { data: null };
  }
}
