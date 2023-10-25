export default {
  name: 'link',
  title: 'Links',
  type: 'object',
  icon: () => '🔗',
  fields: [
    {
      name: 'linkText',
      title: 'Link Text',
      type: 'string',
    },
    {
      name: 'linkUrl',
      title: 'Link Url',
      type: 'string',
    },
    {
      name: 'linkRef',
      title: 'Link Reference',
      type: 'reference',
      to: [
        {
          type: 'film',
        },
        {
          type: 'page',
        },
      ],
    },
  ],
}
