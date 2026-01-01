
const About = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-accent/10" />
      <div className="relative container mx-auto px-4 py-16 sm:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Image (LEFT on desktop) */}
          <div className="relative">
            <div className="w-full h-[460px] sm:h-[480px] lg:h-[600px] overflow-hidden rounded-xl bg-muted shadow-md">
              <img
                src="https://public.readdy.ai/ai/img_res/7fbb314f2a5f435c179f5b2b2253958f.jpg"
                alt="About Intellink"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text (RIGHT on desktop) */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Connecting Japan and Emerging Markets
            </h1>

            <div className="space-y-4 max-w-lg mx-auto lg:mx-0">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Intellink Nippon Consulting was founded on a clear reality: businesses in Japan and emerging markets, particularly across Africa, are eager to engage but face significant barriers.
              </p>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Geographical distance, limited mutual understanding, and unfamiliarity with local conditions — combined with distinct cultural and business norms — make cross-border collaboration challenging.
              </p>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                We exist to change that. Our mission is to eliminate friction in Africa–Japan business relations by providing critical linkages, local insights, and operational support needed to build trusted, sustainable partnerships.
              </p>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                We aim to eliminate the friction in Africa–Japan business relations by providing the critical linkages, local insight, and operational support needed to build trusted, sustainable partnerships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
