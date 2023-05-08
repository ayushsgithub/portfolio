import { type SchemaTypeDefinition } from 'sanity'

import pageInfo from './schemas/pageInfo'
import project from './schemas/project'
import skill from './schemas/skill'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo, project, skill, ],
}
