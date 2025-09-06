export const useProjects = () => {
    const projects : Ref<{ slug: string; title: string; description: string }[]> = useState('projects', () => [
      { slug: 'portfolio-site', title: 'Portfolio Site', description: 'Built with Nuxt 4' },
      { slug: 'personal-blog', title: 'Personal Blog', description: 'Markdown-powered blog' },
    ])
  
    return {
      projects
    }
  }
  