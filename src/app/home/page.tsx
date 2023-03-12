import { getUserFromCookie } from '@/lib/auth'
import { cookies } from 'next/headers'
import Link from 'next/link'
import Card from '@/components/Card'
import Navbar from '@/components/Navbar'
import Glasspane from '@/components/Glasspane'

const HomeLinks = [
  {
    name: 'Dashboard',
    href: '/dashboard',
  },
  {
    name: 'Profile',
    href: '/profile',
  },
  {
    name: 'Settings',
    href: '/settings',
  },
]

export default async function Home() {
  const user = await getUserFromCookie(cookies())
  return (
  <Glasspane>
    <div className="w-full h-screen flex flex-col items-center mx-auto bg-slate-200">
      <Navbar />
      <h1 className="text-4xl font-bold">Hello {user?.firstName}, Welcome Back!</h1>
      <div className="w-full flex flex-row justify-center">
      {HomeLinks.map((link) => (
        <Card key={link.name} className="!px-6 !py-8 drop-shadow-lg hover:scale-105 hover:cursor-pointer p-6 rounded-2xl m-6">
          <Link href={link.href}>
            {link.name}
          </Link>
        </Card>
      ))}
      </div>

    </div>
  </Glasspane>
  )
}
