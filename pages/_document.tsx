import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="zh-Hans">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC&family=Noto+Serif+SC:wght@500&display=swap"
            rel="preload"
            as="style"
          />
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
