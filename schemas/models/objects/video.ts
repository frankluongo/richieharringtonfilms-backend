export default {
  name: 'video',
  title: 'Video',
  type: 'object',
  icon: () => '🎥',
  fields: [
    {
      name: 'title',
      title: 'Title (Optional)',
      type: 'string',
    },
    {
      name: 'url',
      title: 'Video Url',
      description: 'Youtube or Vimeo video url',
      type: 'url',
      hidden: (props: any) => !!props?.parent?.file,
    },
    {
      name: 'file',
      title: 'Video File',
      description: 'If not using a vimeo or YouTube video, upload a video file here',
      type: 'file',
      hidden: (props: any) => !!props?.parent?.url?.length,
    },
  ],
}
