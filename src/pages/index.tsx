import { Layout } from '../components/core';
import { Content } from '../components/home';

export default function Home() {
  return (
    <Layout menu={false} topPadding={true}>
      <Content />
    </Layout>
  );
}
