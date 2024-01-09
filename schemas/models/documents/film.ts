export default {
  name: 'film',
  title: 'Projects',
  type: 'document',
  icon: () => '🎥',
  groups: [
    {
      title: 'Page Content',
      name: 'page',
      default: true,
    },
    {
      title: 'Properties',
      name: 'properties',
    },
  ],
  fields: [
    // PROPERTIES:
    {
      name: 'published',
      title: 'Published?',
      type: 'boolean',
      group: 'properties',
    },
    {
      name: 'orderRank',
      title: 'Order',
      type: 'string',
      group: 'properties',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'properties',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
      group: 'properties',
    },
    {
      name: 'releaseDate',
      title: 'Release date',
      type: 'datetime',
      group: 'properties',
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'category',
            },
          ],
        },
      ],
      group: 'properties',
    },
    // PAGE CONTENT:
    {
      title: 'Use Photo?',
      description: 'Use the "Poster" image instead of a video at the top of the page',
      name: 'usePhoto',
      type: 'boolean',
      group: 'page',
    },
    {
      title: 'Video URL',
      name: 'videoUrl',
      type: 'url',
      group: 'page',
    },
    {
      name: 'poster',
      title: 'Poster Image',
      type: 'image',
      options: {
        hotspot: !0,
      },
      group: 'page',
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail Image (Homepage)',
      description: 'This image is used on the homepage only',
      type: 'image',
      group: 'page',
    },
    {
      name: 'imageSize',
      title: 'Poster Size',
      type: 'string',
      options: {
        list: [
          {
            title: 'Screenshot',
            value: 'screenshot',
          },
          {
            title: 'Poster',
            value: 'poster',
          },
        ],
      },
      group: 'page',
    },
    {
      name: 'photos',
      title: 'Photos (Displayed above text)',
      type: 'array',
      of: [{type: 'photo'}],
      group: 'page',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent',
      group: 'page',
    },
    {
      name: 'images',
      title: 'Photo Galleries (Displays below text)',
      type: 'array',
      of: [
        {
          type: 'photoGallery',
        },
      ],
      group: 'page',
    },
  ],
  initialValue: {
    order: 0,
  },
  preview: {
    select: {
      title: 'title',
      media: 'poster',
    },
    prepare: (e: any) => ({
      title: `${e.title}`,
      media: e.media,
    }),
  },
}
