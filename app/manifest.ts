import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'PRNexGen - Digital Solutions',
    short_name: 'PRNexGen',
    description: 'Leading IT company specializing in web development, mobile apps, AI automation, and cloud solutions',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3B82F6',
    icons: [
      {
        src: '/fevilogo.jpg',
        sizes: 'any',
        type: 'image/jpeg',
      },
    ],
  }
}
