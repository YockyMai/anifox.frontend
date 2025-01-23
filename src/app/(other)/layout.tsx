import '../global.css'
import './page.css'

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <div className='app'>{children}</div>
      </body>
    </html>
  )
}

export default RootLayout
