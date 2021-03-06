import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head >
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon1.png" />
          <meta name="theme-color" content="#283142" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument