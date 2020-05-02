export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eacb96bfe9df1217668e94e',
                  title: 'Sanity Studio',
                  name: 'cinetnia-studio',
                  apiId: 'e7c75b43-512d-41cf-852d-4f5e3e76c61f'
                },
                {
                  buildHookId: '5eacb96b0ecc6bfcb6d0b161',
                  title: 'Blog Website',
                  name: 'cinetnia',
                  apiId: '19204354-af12-430a-883c-836b30851001'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/danpliego/cinetnia',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://cinetnia.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
