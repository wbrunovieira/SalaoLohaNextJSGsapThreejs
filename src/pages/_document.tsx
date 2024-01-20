import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='anonymous'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;600;800;900&display=swap'
            rel='stylesheet'
          />
          <script src='https://cdn.lordicon.com/lordicon.js' async />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
