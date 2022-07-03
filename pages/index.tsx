import type { NextPage } from 'next'
import { Layout } from './components/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-bold underline">
          A construire
        </h1>
      </div>
    </Layout>
  )
}

export default Home
