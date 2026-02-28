import { getApiURL } from "@/lib/utils";

const root = getApiURL() + "/api/events";

export async function getEvents() {
  const url = `${root}?populate=*`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.READ_ONLY_API_TOKEN}`,
    },
  });
  return await response.json().then((data) => data.data);
}
