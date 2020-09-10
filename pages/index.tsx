import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>NODE_ENV:{process.env.NODE_ENV}</p>
    <p>CUSTOM_ENV:{process.env.CUSTOM_ENV}</p>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
