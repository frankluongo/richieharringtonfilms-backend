export default {
  name: 'contact',
  title: 'Contact Item',
  type: 'object',
  icon: () => '👥',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'type',
      title: 'Contact Type',
      type: 'string',
      options: {
        layout: 'dropdown',
        list: [
          {title: 'Email Address', value: 'email'},
          {title: 'Phone Number', value: 'phone'},
          {title: 'Url', value: 'url'},
        ],
      },
    },
    {
      name: 'url',
      title: 'Url',
      type: 'string',
    },
    {
      name: 'icon',
      title: 'Icon Image (optional)',
      type: 'image',
    },
    {
      name: 'iconSvg',
      title: 'Icon SVG (optional)',
      type: 'text',
    },
  ],
}
