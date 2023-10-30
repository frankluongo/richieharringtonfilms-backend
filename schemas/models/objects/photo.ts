export default {
  name: 'photo',
  title: 'Photo (No Lightbox)',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title (Optional)',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
  ],
}
