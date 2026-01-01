import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <section className="relative h-screen sm:h-[600px] bg-gray-800">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1645611869962-e3a769ac16f6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
      ></div>

      <div className="absolute inset-0 bg-black/50"></div>
      {/* Content */}
      <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Welcome to Intellink Nippon Consulting
        </h1>
        <p className="text-lg sm:text-xl text-white/80 max-w-3xl leading-relaxed mb-6">
          Your dedicated partner in connecting Japan with the world’s most promising emerging markets. 
          Rooted in Tokyo and driven by global collaboration, we help businesses expand across borders with clarity, trust, and meaningful results.
        </p>
      
        <Button size="lg" className="bg-[#f59f0a] hover:bg-[#c8820a] p-6">
          Explore Our Services
        </Button>
      </div>
    </section>
  )
}

export default Hero
