export default {
  name: 'videoTab',
  title: 'Video Tab',
  type: 'object',
  icon: () => '🎞️',
  fields: [
    {
      name: 'tab',
      title: 'Tab',
      type: 'string',
    },
    {
      name: 'video',
      title: 'Video',
      type: 'url',
    },
  ],
}
