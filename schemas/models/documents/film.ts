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
      name: 'order',
      title: 'Order',
      type: 'number',
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
  orderings: [
    {
      title: 'Set Order (Desc)',
      name: 'setOrderDesc',
      by: [
        {
          field: 'order',
          direction: 'desc',
        },
      ],
    },
    {
      title: 'Set Order (Asc)',
      name: 'setOrderAsc',
      by: [
        {
          field: 'order',
          direction: 'asc',
        },
      ],
    },
  ],
  initialValue: {
    order: 0,
  },
  preview: {
    select: {
      title: 'title',
      media: 'poster',
      order: 'order',
    },
    prepare: (e: any) => ({
      title: `${e.title} (${e.order})`,
      media: e.media,
    }),
  },
}
