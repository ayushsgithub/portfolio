import { PageInfo } from "../../typing";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

export const getPageInfo = groq`*[_type == "pageInfo"][0]`;

type Data = {
  pageInfo: PageInfo;
};

// Uncomment this function if you want to use it as an API route
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const pageInfo: PageInfo = await sanityClient.fetch(getPageInfo);

  res.status(200).json({ pageInfo });
}
