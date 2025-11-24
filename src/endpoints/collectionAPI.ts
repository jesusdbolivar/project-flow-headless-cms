import { PayloadHandler } from 'payload'

export const listCollections: PayloadHandler = async (req) => {
  if (!req.payload.config) {
    return Response.json({ error: 'Config not loaded' }, { status: 500 })
  }

  const collections = req.payload.config.collections.filter((collection) => {
    if (
      ![
        'media',
        'payload-kv',
        'payload-locked-documents',
        'payload-migrations',
        'payload-preferences',
        'users',
      ].includes(collection.slug)
    ) {
      return collection
    }
  })

  const response = collections.map((collection) => {
    return {
      label: collection.labels?.singular || collection.slug,
      slug: collection.slug,
      url: `/api/${collection.slug}`,
    }
  })

  return Response.json(response)
}
