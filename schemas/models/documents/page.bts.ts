export default {
  name: 'btspage',
  title: 'Page | Behind The Scenes',
  type: 'document',
  icon: () => '📷',
  fields: [
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
    },
  ],
  preview: {
    prepare: () => ({
      title: 'Behind The Scenes Page',
    }),
  },
}
