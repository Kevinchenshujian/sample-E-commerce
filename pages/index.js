import Head from 'next/head'
import Link from "next/link"
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css';
import ProductList from "./products/ProductList";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, this is your shopping List</p>
        <p>
          (This is a sample website - design for viewing available products.)
        </p>
      </section>
      <ProductList />
      <Link href="/products/first-product">First Product</Link>
    </Layout>
  )
}