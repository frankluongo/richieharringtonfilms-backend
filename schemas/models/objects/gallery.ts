export default {
  name: 'photoGallery',
  title: 'Photo Gallery',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'images',
      title: 'Photo Gallery',
      type: 'array',
      options: {
        layout: 'grid',
      },
      of: [
        {
          type: 'image',
        },
      ],
    },
  ],
}
