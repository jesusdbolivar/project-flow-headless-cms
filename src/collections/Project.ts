import { CollectionConfig } from 'payload'

export const Project: CollectionConfig = {
  slug: 'projects',
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
  },
  fields: [
    {
      label: 'Esquema',
      name: 'schema',
      type: 'json',
      index: true,
    },
  ],
}
