import { Button } from '@/components/ui/button'

const CTA = () => {
  return (
    <section className="py-16 sm:py-20 px-4 bg-gradient-to-r from-[#4b749f]  to-[#243748] text-white">
      <div className="container mx-auto text-center space-y-6 sm:space-y-8">
        {/* Heading */}
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold">
          Ready to Expand Your Global Reach?
        </h2>

        {/* Subheading */}
        <p className="text-lg sm:text-xl  max-w-3xl mx-auto leading-relaxed">
          Connect with our experts today and discover how we can help your business thrive in international markets.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
          <Button size="lg" className="bg-[#f59f0a] hover:bg-[#c8820a]">
            Start Your Journey
          </Button>
          <Button size="lg" className='bg-white text-[#c8820a] hover:bg-[#c8820a] hover:text-white' >
            Meet Our Experts
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CTA
