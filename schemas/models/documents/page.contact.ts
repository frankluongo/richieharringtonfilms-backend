export default {
  name: 'contactPage',
  title: 'Page | Contact (Deprecated)',
  type: 'document',
  icon: () => '📞',
  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    },
    {
      name: 'contactPhoto',
      title: 'Contact Me Photo',
      type: 'image',
      options: {
        hotspot: !0,
      },
    },
  ],
  preview: {
    prepare: () => ({
      title: 'Contact Page',
    }),
  },
}
