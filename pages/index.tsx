import type { NextPage } from 'next';
import Card from '../components/Card';
import { Layout } from '../components/Layout';

const Home: NextPage = () => {

  return (
    <Layout>
      <Card value='10' symbol='S'/>
    </Layout>
  )
}

export default Home
