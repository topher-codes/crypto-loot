import Link from 'next/link'

const Links = [
  { href: '/home', label: 'Home' },
  { href: '/home/dashboard', label: 'Dashboard' },
  { href: '/home/profile', label: 'Profile' },
  { href: '/home/settings', label: 'Settings' },
  ]

export default function Navbar() {
  return (
    <nav className="lg:w-1/2 px-6 bg-white flex flex-wrap items-center py-2 border-b-4 pt-6 mb-6">
      <div className="flex-1 flex justify-between items-center">
        {Links.map((link) => (
        <Link key={link.label} href={link.href} className="text-gray-800 text-xl font-bold cursive tracking-widest hover:scale-105 hover:text-gray-400">
          {link.label}
        </Link>
        ))}
        </div>
    </nav>
  )
}          
