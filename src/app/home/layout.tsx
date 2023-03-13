import GlassPane from "@/components/Glasspane"
import Navbar from "@/components/Navbar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen min-w-screen items-center">
      <Navbar />
      <GlassPane className="w-full h-full"> 
      {children}
      </GlassPane>
    </div>
  )
}
