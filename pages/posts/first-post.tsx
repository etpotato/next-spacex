import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script';
import Layout from '../../components/layout';

const FirstPost: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>First post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() => {
          console.log(`script loaded correctly, window.FB has been populated`)
          console.log(FB)
        }}
      />
      <h1>First Post</h1>
    </Layout>
  );
}

export default FirstPost

