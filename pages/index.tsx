import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <h1>
      Read{' '}
      <Link href="/posts/first-post">
        this page!
      </Link>
    </h1>
  )
}

export default Home
