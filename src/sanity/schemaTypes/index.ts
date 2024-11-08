
import { type SchemaTypeDefinition } from 'sanity'
// import { announcement } from './documents/announcement'
import { schemaTypes } from '../schemas'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    ...schemaTypes
  ],
}
