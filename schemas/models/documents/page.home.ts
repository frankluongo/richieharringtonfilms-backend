export default {
  name: 'homepage',
  title: 'Page | Homepage',
  type: 'document',
  icon: () => '🏠',
  fields: [
    {
      name: 'textColor',
      title: 'Custom Text Color',
      type: 'color',
    },
    {
      name: 'aboveVideoText',
      title: 'Above Video Text',
      type: 'blockContent',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent',
      description: 'Text below video',
    },
    {
      name: 'images',
      title: 'Images',
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
    {
      name: 'featProject',
      title: 'Featured Project',
      type: 'reference',
      to: [
        {
          type: 'film',
        },
      ],
    },
    {
      name: 'videos',
      title: 'Videos For Carousel',
      type: 'array',
      of: [{type: 'url'}],
    },
    {
      name: 'featVid',
      title: 'Featured Video',
      type: 'url',
    },
    {
      name: 'videoTitle',
      title: 'Video Title',
      type: 'string',
    },
    {
      name: 'videoDescription',
      title: 'Video Description',
      type: 'blockContent',
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
