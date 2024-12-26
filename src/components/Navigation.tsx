import Link from 'next/link'
import { Button } from "@/components/ui/button"

const Navigation = () => {
  return (
    <nav className="absolute top-0 left-0 w-full p-4 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Button variant="ghost" className="water-text-effect hover:text-cyan-100 transition-colors" asChild>
          <Link href="/">Home</Link>
        </Button>
        <div className="space-x-4">
          <Button variant="ghost" className="water-text-effect hover:text-cyan-100 transition-colors" asChild>
            <Link href="/projects">Projects</Link>
          </Button>
          <Button variant="ghost" className="water-text-effect hover:text-cyan-100 transition-colors" asChild>
            <Link href="/about">About</Link>
          </Button>
          <Button variant="ghost" className="water-text-effect hover:text-cyan-100 transition-colors" asChild>
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

