export default {
  name: 'page',
  title: 'Page | Other Pages',
  description: 'General Purpose Pages',
  type: 'document',
  icon: () => '📄',
  fields: [
    {
      name: 'textColor',
      title: 'Custom Text Color',
      type: 'color',
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
      name: 'featImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: !0,
      },
    },
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'featImage',
    },
    prepare: (e: any) => ({
      title: e.title,
      media: e.media,
    }),
  },
}
