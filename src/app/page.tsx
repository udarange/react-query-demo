'use client'
import { useAllPosts } from '@/hooks/postHook'
import { IPost } from '@/services/types'
import Link from 'next/link'

export default function Home() {
  const { isPending, isError, data, error } = useAllPosts()

  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <main>
      <div>
        <h1>This Component has GetAll Details</h1>
        <ul>
          {data?.map((post: IPost) => (
            <li key={post.id}>
              <Link href={post.id.toString()}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
