import Link from 'next/link';
import Header from 'next/head';
import Image from 'next/image';
import Layout from './components/layout';

export default function FirstPost() {
  return (
    <Layout>
    <Header>
      <title>First Post</title>
    </Header>
      <h1>Saurav and Sachin are very big chutias</h1>
      <h2>
        <Image src="/images/profile.jpg" 
        alt="Saurav and Sachin" 
        width={200} 
        height={200} 
        />
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}