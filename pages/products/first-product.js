import Link from "next/link";
import Head from "next/head";
import Layout from '../../components/layout'

export default function FirstProduct() {
  return (
    <Layout>
      <Head>
        <title>First Product</title>
      </Head>
      <h1>Orange</h1>
      {/* <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2> */}
    </Layout>
  );
}