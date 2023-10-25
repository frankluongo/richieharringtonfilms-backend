export default {
  name: 'global',
  icon: () => '🌎',
  title: 'Global Settings',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Business Name',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      description: 'This text is used by Google to describe your site',
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
    {
      name: 'vimeo',
      title: 'Vimeo',
      type: 'url',
    },
    {
      name: 'youtube',
      title: 'YouTube',
      type: 'url',
    },
    {
      name: 'imdb',
      title: 'IMDb',
      type: 'url',
    },
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
    },
    {
      name: 'facebook',
      title: 'Facebook',
      type: 'url',
    },
    {
      name: 'contact',
      title: 'Contact Information',
      type: 'array',
      of: [{type: 'contact'}],
    },
    {
      name: 'socials',
      title: 'Social Links',
      type: 'array',
      of: [{type: 'contact'}],
    },
    {
      name: 'navigation',
      title: 'Navigation Links',
      type: 'array',
      of: [{type: 'link'}],
    },
  ],
  preview: {
    prepare: () => ({
      title: 'Settings',
    }),
  },
}
