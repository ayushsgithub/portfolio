import { Skill } from "../../typing"
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";  

export const getSkills = groq`*[_type == "skill"]`

type Data = {
    skills: Skill[]
}


// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse<Data>
//   ) {
//     const skills: Skill[] = await sanityClient.fetch(query)

//     res.status(200).json({ skills })
//   }