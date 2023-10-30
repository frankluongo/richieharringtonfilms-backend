export default {
  name: 'reels',
  title: 'Page | Reels',
  type: 'document',
  icon: () => '🎞️',
  fields: [
    {
      name: 'tabs',
      title: 'Tabs',
      type: 'array',
      of: [{type: 'videoTab'}],
    },
  ],
  preview: {
    prepare: () => ({
      title: 'Reels Page',
    }),
  },
}
