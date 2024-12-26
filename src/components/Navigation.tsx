import { Button } from "@/components/ui/button"

const Navigation = () => {
  const scrollTo = (elementId: string) => {
    const element = document.getElementById(elementId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 w-full p-4 z-10 bg-black bg-opacity-50">
      <div className="container mx-auto flex justify-between items-center">
        <Button variant="ghost" className="water-text-effect hover:text-cyan-100 transition-colors" onClick={() => window.scrollTo(0, 0)}>
          Home
        </Button>
        <div className="space-x-4">
          <Button variant="ghost" className="water-text-effect hover:text-cyan-100 transition-colors" onClick={() => scrollTo('experience')}>
            Experience
          </Button>
          <Button variant="ghost" className="water-text-effect hover:text-cyan-100 transition-colors" onClick={() => scrollTo('projects')}>
            Projects
          </Button>
          <Button variant="ghost" className="water-text-effect hover:text-cyan-100 transition-colors" onClick={() => scrollTo('contact')}>
            Contact
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

