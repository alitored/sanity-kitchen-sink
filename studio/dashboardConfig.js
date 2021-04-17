export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '607b6e4521dae30f5af5da56',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-rca1mboc',
                  apiId: '5fb22e47-b3ca-4058-a4d1-d738bb753409'
                },
                {
                  buildHookId: '607b6e45266fa8e17240efc6',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-w1gm48v6',
                  apiId: 'd1deec32-41bd-448f-9095-d5b5129d0e7d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alitored/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-w1gm48v6.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
