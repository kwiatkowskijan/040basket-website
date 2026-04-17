import { getApiURL } from "@/lib/utils";

const root = getApiURL() + "/api/contact";

export async function sendContactForm(data: {
  name: string;
  email: string;
  message: string;
}) {
  const url = `${root}/send`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Error sending form");
  }

  return await response.json().then((data) => data.data);
}
