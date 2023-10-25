export default {
  name: 'category',
  title: 'Categories',
  type: 'document',
  icon: () => '📁',
  fields: [
    {
      name: 'categoryName',
      title: 'Category',
      type: 'string',
      description: 'Category Name',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'categoryName',
        maxLength: 100,
      },
    },
  ],
  preview: {
    select: {
      name: 'categoryName',
    },
    prepare: (e: any) => ({
      title: ''.concat(e.name),
    }),
  },
}
