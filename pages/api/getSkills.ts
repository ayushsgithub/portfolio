import { Skill } from "../../typing";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

export const getSkills = groq`*[_type == "skill"]`;

type Data = {
  skills: Skill[];
};

// Uncomment this function if you want to use it as an API route
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const skills: Skill[] = await sanityClient.fetch(getSkills);

  res.status(200).json({ skills });
}
