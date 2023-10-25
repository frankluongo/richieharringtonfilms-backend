export default {
  name: 'aboutpage',
  title: 'Page | About Me',
  type: 'document',
  icon: () => '🤷🏻‍♂️',
  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    },
    {
      name: 'aboutImage',
      title: 'About Me Photo',
      type: 'image',
      options: {
        hotspot: !0,
      },
    },
  ],
  preview: {
    prepare: () => ({
      title: 'About Page',
    }),
  },
}
