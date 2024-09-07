import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <Button>
      <Link href="/auth/sign-in">Sign In</Link>
    </Button>
  )
}
