import { CollectionConfig } from 'payload'

export const Schema: CollectionConfig = {
  slug: 'schemas',
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
  },
  fields: [
    {
        label: 'Colección',
        name: 'collection',
        type: 'text',
        required: true,
    },
    {
      label: 'Esquema',
      name: 'schema',
      type: 'json',
      index: true,
    },
  ],
}
