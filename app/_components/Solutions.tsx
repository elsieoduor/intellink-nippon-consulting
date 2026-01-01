import { ArrowRight, BarChart, Link, User } from "lucide-react"

const Solutions = () => {
  return (
    <section className="bg-[#fafcff] py-16 sm:py-20 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="text-sm font-semibold tracking-widest text-orange-500 uppercase">
            Our Solutions
          </span>

          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
            Comprehensive Services for Global Success
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            At Intellink Nippon Consulting, we help companies, governments, and innovators bridge opportunities between Japan and Africa. Our services are designed to simplify market entry, connect you with the right expertise, and make cross-border trade seamless.
          </p>
        </div>
        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center ">
          {/* Image (LEFT) */}
          <div className="relative">
            <div className="w-full h-[280px] sm:h-[300px] lg:h-[420px] overflow-hidden rounded-2xl shadow-md">
              <img
                src="https://images.unsplash.com/photo-1565728744382-61accd4aa148?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29uc3VsdGFudHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Expert consulting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Text Content (RIGHT) */}
          <div className="space-y-3 text-center lg:text-left max-w-xl mx-auto lg:mx-0">

            <div className="flex justify-center lg:justify-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-full  text-blue-600">
                <User className="w-6 h-6" />
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              ExpertConnect™
            </h3>

            <p className="text-orange-500 font-medium">
              Access Industry Leaders
            </p>

            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              Connect with vetted consultants who bring deep expertise in your
              target markets and industries. Get strategic guidance from
              professionals who have been there.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-2 font-medium text-blue-600 hover:text-blue-700 transition"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </a>

          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center mt-4">
          {/* Text Content (RIGHT) */}
          <div className="space-y-3 text-center lg:text-left max-w-xl mx-auto lg:mx-0">

            <div className="flex justify-center lg:justify-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-full text-blue-600">
                <BarChart className="w-6 h-6" />
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              MarketLink™
            </h3>

            <p className="text-orange-500 font-medium">
              Intelligence That Matters
            </p>

            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              Real-time market data, competitive analysis, and trend forecasting. Make informed decisions with comprehensive intelligence tailored to your business needs.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-2 font-medium text-blue-600 hover:text-blue-700 transition"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </a>

          </div>
          {/* Image (LEFT) */}
          <div className="relative">
            <div className="w-full h-[280px] sm:h-[300px] lg:h-[420px] overflow-hidden rounded-2xl shadow-md">
              <img
                src="https://images.unsplash.com/photo-1706823871410-ed8b01faef7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ybGQlMjBtYXB8ZW58MHx8MHx8fDA%3D"
                alt="Expert consulting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center mt-4">
          {/* Image (LEFT) */}
          <div className="relative">
            <div className="w-full h-[280px] sm:h-[300px] lg:h-[420px] overflow-hidden rounded-2xl shadow-md">
              <img
                src="https://plus.unsplash.com/premium_photo-1755874924604-12aa5425468b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRyYWRlJTIwbGlua3xlbnwwfHwwfHx8MA%3D%3D"
                alt="Expert consulting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Text Content (RIGHT) */}
          <div className="space-y-3 text-center lg:text-left max-w-xl mx-auto lg:mx-0">

            <div className="flex justify-center lg:justify-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-full text-blue-600">
                <Link className="w-6 h-6" />
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              TradeLink™
            </h3>

            <p className="text-orange-500 font-medium">
              Connect. Trade. Grow.
            </p>

            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              Our platform connects verified suppliers with qualified buyers across borders. Streamline your sourcing and expand your distribution with confidence.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-2 font-medium text-blue-600 hover:text-blue-700 transition"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </a>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Solutions
