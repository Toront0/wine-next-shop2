import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Serif+Text&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <div id='modals'></div>
        <NextScript />
      </body>
    </Html>
  )
}
