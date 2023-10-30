export default {
  name: 'homepage',
  title: 'Page | Homepage',
  type: 'document',
  icon: () => '🏠',
  fields: [
    {
      name: 'videos',
      title: 'Videos For Carousel',
      description:
        'Videos added here will display in a carousel on the top of the page. Recommended to use videos that are 6 seconds or less',
      type: 'array',
      of: [{type: 'url'}],
    },
    {
      name: 'featVid',
      title: 'Featured Video',
      type: 'url',
    },
    {
      name: 'featImage',
      title: 'Featured Image',
      type: 'image',
      description:
        'This is an optional image used to show a preview for this page in search results',
      options: {
        hotspot: !0,
      },
    },
  ],
  preview: {
    prepare: () => ({
      title: 'Website Homepage',
    }),
  },
}
