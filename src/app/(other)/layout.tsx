import '../global.css'

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang='ru' suppressHydrationWarning>
      <body>
        <div className='h-screen w-screen'>{children}</div>
      </body>
    </html>
  )
}

export default RootLayout
