import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="zh-Hans">
        <Head>
          <link
            as="font"
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC&family=Noto+Serif+SC:wght@500&display=swap"
            rel="preload"
          ></link>
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
