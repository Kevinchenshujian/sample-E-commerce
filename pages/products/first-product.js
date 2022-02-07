import Link from "next/link";
import Head from "next/head";
import Layout from '../../components/layout'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ProductList from "./ProductList";

export default function FirstProduct() {
  return (
    <Layout children>
      <Head>
        <title>First Product</title>
      </Head>
      <h1>Orange</h1>
      
    </Layout>
  );
}