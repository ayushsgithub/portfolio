import { Project } from "../../typing";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

export const getProjects = groq`*[_type == "project"]{ ..., technologies[] ->}`;

type Data = {
  projects: Project[];
};

// Uncomment this function if you want to use it as an API route
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const projects: Project[] = await sanityClient.fetch(getProjects);

  res.status(200).json({ projects });
}
