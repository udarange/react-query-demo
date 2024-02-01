'use client'
import { usePostById } from '@/hooks/postHook'
import { usePathname } from 'next/navigation'

export default function Home() {
  const pathname = usePathname()
  const id = pathname.substring(1)
  const isNumber = !isNaN(Number(id))

  const { isPending, isError, data, error } = usePostById(
    isNumber ? id : undefined
  )

  if (!isNumber) {
    return <span>Not a valid post id...</span>
  }

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

        <p>{data?.title}</p>
      </div>
    </main>
  )
}
