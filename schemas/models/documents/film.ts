export default {
  name: 'film',
  title: 'Projects',
  type: 'document',
  icon: () => '🎥',
  fields: [
    {
      name: 'textColor',
      title: 'Custom Text Color',
      type: 'color',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    },
    {
      title: 'Video URL',
      name: 'videoUrl',
      type: 'url',
    },
    {
      name: 'poster',
      title: 'Poster Image',
      type: 'image',
      options: {
        hotspot: !0,
      },
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
    },
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    },
    {
      name: 'published',
      title: 'Published?',
      type: 'boolean',
    },
    {
      name: 'releaseDate',
      title: 'Release date',
      type: 'datetime',
    },
    {
      name: 'images',
      title: 'Photo Galleries',
      type: 'array',
      of: [
        {
          type: 'photoGallery',
        },
      ],
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
