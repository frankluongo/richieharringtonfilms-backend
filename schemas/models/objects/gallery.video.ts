export default {
  name: 'videoGallery',
  title: 'Video Gallery',
  type: 'object',
  fields: [
    {
      name: 'videos',
      title: 'Videos',
      type: 'array',
      of: [{type: 'video'}],
    },
  ],
}
