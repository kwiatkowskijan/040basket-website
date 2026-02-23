import { getApiURL } from "@/lib/utils";

const root = getApiURL() + "/api";

export async function getPostBySlug(slug: string) {
  const url = `${root}/posts?filters[slug][$eq]=${slug}&populate=coverImage`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.READ_ONLY_API_TOKEN}`,
    },
  });
  return await response.json().then((data) => data.data[0]);
}

export async function getPosts() {
  const url = `${root}/posts?populate=coverImage`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.READ_ONLY_API_TOKEN}`,
    },
  });
  return await response.json().then((data) => data.data);
}

export async function getLastPost(ammount: number) {
  const url = `${root}/posts?populate=coverImage&pagination[limit]=${ammount}&sort=createdAt:desc`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.READ_ONLY_API_TOKEN}`,
    },
  });
  return await response.json().then((data) => data.data);
}
