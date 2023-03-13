import Sidebarlink from "@/components/Sidebarlink"
import Card from "@/components/Card"

const links = [
  {
    name: 'Dashboard',
    link: '/home/dashboard',
    icon: 'Grid',
  },
  {
    name: 'Profile',
    link: '/home/profile',
    icon: 'User',
  },
  {
    name: 'Settings',
    link: '/home/settings',
    icon: 'Settings',
  },
]

export default function Sidebar() {
  return (
  <Card className="h-screen w-40 flex items-center justify-between flex-wrap">
      {links.map((link) => (  
        <Sidebarlink link={link} key={link} />
      ))}
    </Card>
  )
    
}
