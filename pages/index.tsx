import type { NextPage } from 'next';
import { Board } from '../components/Board';
import { Layout } from '../components/Layout';

const Home: NextPage = () => {

  return (
    <Layout>
      <Board/>
    </Layout>
  )
}

export default Home
