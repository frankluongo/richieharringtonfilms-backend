export default {
  name: 'projectspage',
  title: 'Page | Projects',
  type: 'document',
  icon: () => '🐙',
  fields: [
    {
      name: 'hero',
      title: 'Hero Image',
      type: 'image',
      description: 'This image will display at the top of the page',
    },
  ],
  preview: {
    prepare: () => ({
      title: 'Projects Page',
    }),
  },
}
