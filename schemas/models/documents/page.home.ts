import seo from '../fields/seo'

export default {
  name: 'homepage',
  title: 'Page | Homepage',
  type: 'document',
  icon: () => '🏠',
  groups: [
    {
      title: 'Content',
      name: 'content',
      default: true,
    },
    {
      title: 'SEO',
      name: 'seo',
    },
  ],
  fields: [
    {
      name: 'videos',
      title: 'Videos For Carousel',
      description:
        'Videos added here will display in a carousel on the top of the page. Recommended to use videos that are 6 seconds or less',
      type: 'videoGallery',
      group: 'content',
    },
    {
      name: 'featVid',
      title: 'Featured Video',
      type: 'url',
      group: 'content',
    },
    {
      name: 'projects',
      title: 'Featured Projects',
      type: 'array',
      layout: 'grid',
      of: [{type: 'reference', to: [{type: 'film'}]}],
      group: 'content',
    },
    ...seo,
  ],
  preview: {
    prepare: () => ({
      title: 'Website Homepage',
    }),
  },
}
