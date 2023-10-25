export default {
  name: 'imageLink',
  title: 'Image With Link',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'reference',
      to: [
        {
          type: 'film',
        },
      ],
    },
  ],
  preview: {
    select: {
      media: 'image',
    },
    prepare: (e: any) => ({
      media: e.media,
    }),
  },
}
