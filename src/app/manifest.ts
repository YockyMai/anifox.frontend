import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ANIFOX',
    short_name: 'AniFox',
    description: 'Смотри, отслеживай и наслаждайся любимыми аниме онлайн!',
    start_url: '/',
    display: 'standalone',
    background_color: '#1e293b',
    theme_color: '#1e293b',
    icons: [
      {
        src: '/logo/256x256.webp',
        sizes: '256x256',
        type: 'image/webp'
      },
      {
        src: '/logo/512x512.webp',
        sizes: '512x512',
        type: 'image/webp'
      }
    ]
  }
}
