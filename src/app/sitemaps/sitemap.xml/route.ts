import dayjs from 'dayjs'

const convertDate = (date: Date) => dayjs(date).format('YYYY-MM-DD')

// index sitemap
export async function GET() {
  const host = process.env.HOST

  const xml = `
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <sitemap>
        <loc>${host}/sitemaps/main/sitemap.xml</loc>
        <lastmod>${convertDate(new Date())}</lastmod>
      </sitemap>
      <sitemap>
        <loc>${host}/sitemaps/anime/sitemap.xml</loc>
        <lastmod>${convertDate(new Date())}</lastmod>
      </sitemap>
    </sitemapindex>
  `

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml'
    }
  })
}
