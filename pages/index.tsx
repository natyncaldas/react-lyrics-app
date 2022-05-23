import type { NextPage } from 'next'
import DefaultLayout from '../layouts/DefaultLayout'

const Home: NextPage = () => {
  return (
    <DefaultLayout>
    </DefaultLayout>
  )
}

export async function getStaticProps() {
  return {
    props: {
    },
  }
}

export default Home
