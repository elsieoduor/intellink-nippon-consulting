import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart3, Users, Globe2, Lightbulb, Rocket, ArrowRight, Compass, Search, Share2, Ship, Eye, Target, Handshake, Leaf } from 'lucide-react'
import React from 'react'

const page = () => {
  const pillars = [
    {
      title: "Insight-Driven",
      description: "We combine data analytics with on-the-ground intelligence to provide you with actionable market insights.",
      icon: <Lightbulb className="w-6 h-6 text-yellow-500" />,
    },
    {
      title: "Relationship-Focused",
      description: "Our extensive network of industry experts and business leaders opens doors and creates opportunities.",
      icon: <Users className="w-6 h-6 text-yellow-500" />,
    },
    {
      title: "Results-Oriented",
      description: "We measure success by your success. Every strategy is designed to deliver measurable business outcomes.",
      icon: <Rocket className="w-6 h-6 text-yellow-500" />,
    }
  ];
  const services = [
    {
      title: "Market Intelligence",
      description: "We provide timely and accurate insights through research, feasibility studies, and regulatory analysis. Our reports help businesses make informed decisions and reduce risk when entering new markets.",
      icon: <Search className="h-6 w-6 text-white" />,
    },
    {
      title: "Strategic Advisory",
      description: "Entry strategies, growth playbooks, and decision support tailored to navigate the complex business landscapes between Japan and emerging economies.",
      icon: <Compass className="h-6 w-6 text-white" />,
    },
    {
      title: "ExpertConnect™ Solutions",
      description: "Through our proprietary expert-matching platform, we connect organizations with specialized industry professionals, ensuring access to critical knowledge when and where it is needed.",
      icon: <Share2 className="h-6 w-6 text-white" />,
    },
    {
      title: "Trade Facilitation",
      description: "End-to-end support for partners, logistics, and compliance, simplifying the complexities of cross-border trade and investment operations.",
      icon: <Ship className="h-6 w-6 text-white" />,
    }
  ];
  const values = [
    {
      title: "Kaizen Mindset",
      description: "We embrace continuous learning and improvement for ourselves and our clients.",
      icon: <Lightbulb className="h-6 w-6 text-white" />,
    },
    {
      title: "Partnership Beyond Projects",
      description: "We build lasting relationships that generate value beyond transactions.",
      icon: <Handshake className="h-6 w-6 text-white" />,
    },
    {
      title: "Responsible Growth",
      description: "We promote sustainable business that benefits all stakeholders: clients, communities, and the environment.",
      icon: <Leaf className="h-6 w-6 text-white" />,
    }
  ];
  return (
    <div className="min-h-screen">
      {/* Hero Page */}
      <section className="relative h-[250px] sm:h-[300px] lg:h-[350px] bg-gray-800">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://media.istockphoto.com/id/1221653457/photo/close-up-of-a-touchscreen-social-media-concept.jpg?s=612x612&w=0&k=20&c=thcgiLGWFoRNMrMiDXDGUGPy50i9jhXhiHSy-vokyqI=')" }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            About Us
          </h1>
        </div>
      </section>

      {/* About section */}
      <section className=" bg-slate-50 not-last:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Label */}
          <span className="text-sm font-bold tracking-[0.2em] text-[#f87171] uppercase mb-4 block">
            Our Story 
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1e293b] mb-8 tracking-tight">
            About Us
          </h2>
          
          {/* Decorative divider */}
          <div className="w-20 h-1.5 bg-[#f87171] mx-auto mb-12 rounded-full"></div>
          
          <div className="space-y-8 text-center">
            {/* Mission Statement */}
            <p className="text-xl sm:text-2xl text-slate-700 leading-relaxed font-semibold italic px-4">
              "We facilitate meaningful business collaboration between Japan and Africa, 
              bridging the gap between untapped potential and strategic expansion."
            </p>
            
            {/* Detailed Narrative */}
            <div className="space-y-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              <p>
                Intellink Nippon Consulting was founded in Tokyo after recognizing a persistent gap: 
                while Japanese institutions seek growth in emerging regions, they face cultural 
                and informational barriers. Similarly, businesses in emerging markets often lack 
                the networks or knowledge to engage with Japan’s advanced systems.
              </p>
              
              <p>
                With decades of combined experience in global consulting and risk advisory, our team 
                set out to create a firm that doesn’t just advise — but <strong>connects, translates, 
                and enables.</strong> We recognized the growing interest from Japanese companies to 
                expand internationally and the unique opportunities within African markets.
              </p>

              <p className="bg-slate-50 p-6 rounded-2xl border border-slate-100 font-medium">
                At our core, we are connectors — we combine Japan’s strengths in quality and strategy 
                with the energy and potential of emerging markets, helping our partners move 
                forward with clarity and confidence.
              </p>
            </div>
          </div>

          {/* Brand Values / Footer */}
          <div className="mt-16 pt-10 border-t border-slate-100 flex flex-wrap justify-center gap-8 text-xs font-bold text-slate-400 uppercase tracking-widest">
            <span>Tokyo Founded</span>
            <span className="text-[#f87171]">•</span>
            <span>Africa Focused</span>
            <span className="text-[#f87171]">•</span>
            <span>Trust Powered</span>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 sm:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          
          {/* Centered Header Section */}
          <div className="text-center mb-16 space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e293b]">
              What We Do
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We provide advisory and facilitation services that support market entry, trade, investment, 
              and business development between Japan and emerging economies. Our services are designed 
              to simplify complex business environments, reduce risk, and help organizations capture new opportunities.
            </p>
          </div>

          {/* 4-Column Grid for Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group border-none transition-all duration-300 hover:translate-y-[-8px] hover:shadow-2xl rounded-xl">
                <CardHeader className="pb-4">
                  <div className="bg-[#f87171] w-12 h-12 rounded-lg flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold leading-tight">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col h-full justify-between">
                  <CardDescription className="text-sm leading-relaxed mb-6">
                    {service.description}
                  </CardDescription>
                  
                  <button className="flex items-center text-xs font-bold uppercase tracking-wider text-[#f87171] hover:text-white transition-colors group/btn">
                    Explore Services 
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-2" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Vision Card */}
            <Card className="bg-[#2d3748] border-none text-white py-10 rounded-xl shadow-2xl flex flex-col">
              <CardHeader className="text-center pb-4">
                <div className="bg-[#f87171] w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Eye className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-white tracking-tight">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center px-8 flex-grow">
                <p className="text-slate-200 text-lg leading-relaxed">
                  To become the premier consulting partner for Japan–Africa business collaboration, 
                  driving sustainable growth, innovation, and long-term partnerships.
                </p>
              </CardContent>
            </Card>

            {/* Mission Card */}
            <Card className="bg-[#2d3748] border-none text-white py-10 rounded-xl shadow-2xl flex flex-col">
              <CardHeader className="text-center pb-4">
                <div className="bg-[#f87171] w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Target className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-white tracking-tight">Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center px-8 flex-grow">
                <p className="text-slate-200 text-lg leading-relaxed mb-6">
                  Our mission is to make business between Japan and emerging markets accessible, 
                  effective, and sustainable — by fostering trusted partnerships and delivering 
                  strategic solutions that support growth and shared value creation.
                </p>
                
                {/* Core Pillars from the bottom of your image */}
                <div className="flex flex-wrap justify-center gap-2 pt-4">
                  {['Insight-Driven', 'Expert-Led', 'Connection-Focused'].map((pillar) => (
                    <span key={pillar} className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-slate-300 border border-white/5">
                      {pillar}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Our Philosphy */}
      <section className="bg-[#1a2332] py-20 px-6 md:px-12 lg:px-24 text-white min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="space-y-8">
            <div>
              <span className="text-yellow-500 font-bold text-xs tracking-widest uppercase">
                Our Philosophy
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
                Building Bridges, <br /> Creating Value
              </h2>
            </div>

            <div className="space-y-6 text-slate-300 max-w-xl">
              <p className="leading-relaxed">
                We believe that successful international business is built on three fundamental pillars: 
                deep market understanding, trusted relationships, and strategic execution.
              </p>
              <p className="leading-relaxed">
                Our approach goes beyond traditional consulting. We immerse ourselves in your business challenges, 
                leverage our extensive network, and provide actionable insights that drive real results.
              </p>
              <p className="leading-relaxed text-sm">
                Whether you're entering a new market, seeking strategic partners, or optimizing your 
                global operations, we're committed to your long-term success.
              </p>
            </div>
          </div>

          {/* Right Column: Stacked Cards */}
          <div className="flex flex-col gap-6">
            {pillars.map((pillar, index) => (
              <Card 
                key={index} 
                className="bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300 rounded-xl"
              >
                <CardContent className="p-8 flex items-start gap-6">
                  <div className="mt-1">
                    {pillar.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 sm:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          
          {/* Centered Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e293b]">
              Our Core Values
            </h2>
            <div className="w-20 h-1.5 bg-[#f87171] mx-auto mt-4 rounded-full"></div>
          </div>

          {/* 3-Card Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((item, index) => (
              <Card key={index} className="border-[#2d3748] border-none py-10 rounded-xl shadow-xl transition-transform hover:scale-105 duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="bg-[#f87171] w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                    {item.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold mb-2">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center px-8">
                  <CardDescription className="text-base leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
    </div>
  )
}

export default page