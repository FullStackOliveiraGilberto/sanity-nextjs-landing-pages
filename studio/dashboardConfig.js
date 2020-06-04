export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5ed8feccf57befad30b963d0',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-jonnw4dj',
                  apiId: '61132b5e-a0e0-4cd7-acfd-344e62761949'
                },
                {
                  buildHookId: '5ed8feccffaa350b0a081923',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-7vzwhtza',
                  apiId: '61beb330-cd4c-4223-8684-489d5b17cf4b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/FullStackOliveiraGilberto/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-7vzwhtza.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
