import { useRouter } from 'next/router';
import { Config } from '../config';
import { Layout } from '../components/core';
import { Content } from '../components/errors';

export default function Error404() {
  const { pathname } = useRouter();

  return (
    <Layout
      title="Tidak Ditemukan - KweeksNews Network"
      description="Mohon maaf, halaman yang Anda cari tidak ditemukan."
      image="https://network.kweeksnews.com/assets/images/kweeksnews-network-square.png"
      url={Config.site.url + pathname}
      navLinks={Config.nav}
    >
      <Content navLinks={Config.nav} />
    </Layout>
  );
}
