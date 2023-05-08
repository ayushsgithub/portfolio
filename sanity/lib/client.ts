import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../client'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})
