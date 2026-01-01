import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'
import { BarChart3, Users, Globe2 } from 'lucide-react' // Updated icons to match image context
import React from 'react'

const Why = () => {
  return (
    <div className="bg-white">
      {/* Our Capabilities Section */}
      <section className="py-16 sm:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 lg:mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b]">
              Our Capabilities
            </h2>
            <p className="text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our strength lies in our people — professionals who blend cross-cultural insight, sector expertise, and trusted networks to help businesses and institutions succeed across borders.
            </p>
            <p className="text-sm text-slate-500 max-w-3xl mx-auto italic">
              We deliver agile, insight-driven, and relationship-centered solutions across market intelligence, strategic advisory, expert connections, and trade facilitation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <Card className="bg-[#2d3748] border-none text-white py-8 rounded-lg shadow-xl">
              <CardHeader className="text-center pb-2">
                <div className="bg-[#f87171] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-white mb-2">Insight-Driven</CardTitle>
              </CardHeader>
              <CardContent className="text-center px-6">
                <CardDescription className="text-slate-300 text-sm">
                  Data, research, and analysis guide every strategic decision
                </CardDescription>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="bg-[#2d3748] border-none text-white py-8 rounded-lg shadow-xl">
              <CardHeader className="text-center pb-2">
                <div className="bg-[#f87171] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-white mb-2">People-Powered</CardTitle>
              </CardHeader>
              <CardContent className="text-center px-6">
                <CardDescription className="text-slate-300 text-sm">
                  Cross-cultural expertise and trusted networks drive results
                </CardDescription>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="bg-[#2d3748] border-none text-white py-8 rounded-lg shadow-xl">
              <CardHeader className="text-center pb-2">
                <div className="bg-[#f87171] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe2 className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-white mb-2">Globally Connected</CardTitle>
              </CardHeader>
              <CardContent className="text-center px-6">
                <CardDescription className="text-slate-300 text-sm">
                  Deep understanding of markets and regulatory environments
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column: Text Content */}
            <div className="space-y-8 order-2 lg:order-1 mt-8 lg:mt-0">
              <h2 className="text-4xl font-bold text-[#1e293b]">Why Choose Us</h2>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="text-[#f87171] mt-1.5">•</span>
                  <div>
                    <h4 className="font-bold text-slate-800">Insight-Driven:</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Data, research, and analysis guide every decision we make for your business success.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <span className="text-[#f87171] mt-1.5">•</span>
                  <div>
                    <h4 className="font-bold text-slate-800">Expert-Led:</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Specialized knowledge across sectors and regions with proven track records.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <span className="text-[#f87171] mt-1.5">•</span>
                  <div>
                    <h4 className="font-bold text-slate-800">Connection-Focused:</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Bridging businesses, regulators, and strategic partners across markets.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <span className="text-[#f87171] mt-1.5">•</span>
                  <div>
                    <h4 className="font-bold text-slate-800">Responsible Growth:</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Ethical, sustainable, and mutually beneficial practices in every engagement.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Column: Image */}
            <div className="order-1 lg:order-2">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://public.readdy.ai/ai/img_res/49b6d0ccb9484436397ec7742469c78d.jpg"
                  alt="Corporate Meeting"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Why