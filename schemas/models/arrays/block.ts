export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      type: 'block',
      marks: {
        annotations: [
          {
            name: 'color',
            title: 'Color',
            type: 'color',
            icon: () => '🎨',
          },
          {
            name: 'internalLink',
            type: 'object',
            title: 'Internal Link',
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
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
            icon: () => '🔗',
          },
          {
            name: 'link',
            type: 'object',
            title: 'URL',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
              {
                title: 'Open in new window',
                name: 'blank',
                type: 'boolean',
              },
            ],
          },
        ],
      },
    },
    {
      type: 'image',
      icon: () => '📷',
    },
    {
      type: 'imageLink',
      icon: () => '🔗',
    },
  ],
}
