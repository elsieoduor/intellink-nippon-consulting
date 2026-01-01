import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'
import { TrendingUp, Globe, BarChart3, Bell, ArrowRight } from 'lucide-react'
import React from 'react'

const Insights = () => {
  return (
    <div>
      {/* Background with deep blue gradient to match the image */}
      <section className="py-16 sm:py-24 px-4 bg-gradient-to-r from-[#1c9fab]  to-[#471069] text-white">
        <div className="container mx-auto max-w-7xl">
          
          <div className="text-left mb-12 lg:mb-16 space-y-2">
            <span className="text-xs font-bold tracking-[0.2em] text-orange-400 uppercase">
              Market Insights
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Real-Time Trade Intelligence
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Market Trends Card */}
            <Card className="group bg-white/10 backdrop-blur-sm border-white/10 hover:bg-white/15 transition-all duration-300 text-white rounded-xl overflow-hidden shadow-2xl">
              <CardHeader className="pb-2 space-y-4">
                <TrendingUp className="h-6 w-6 text-white" />
                <CardTitle className="text-xl font-bold">Market Trends</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <CardDescription className="text-blue-100/80 text-sm leading-relaxed">
                  Daily updated analysis of global trade patterns and emerging opportunities.
                </CardDescription>
                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider group-hover:gap-3 transition-all">
                  Explore <ArrowRight className="h-4 w-4" />
                </button>
              </CardContent>
            </Card>

            {/* Global Reports Card */}
            <Card className="group bg-white/10 backdrop-blur-sm border-white/10 hover:bg-white/15 transition-all duration-300 text-white rounded-xl overflow-hidden shadow-2xl">
              <CardHeader className="pb-2 space-y-4">
                <Globe className="h-6 w-6 text-white" />
                <CardTitle className="text-xl font-bold">Global Reports</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <CardDescription className="text-blue-100/80 text-sm leading-relaxed">
                  Comprehensive country and regional market intelligence reports.
                </CardDescription>
                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider group-hover:gap-3 transition-all">
                  Explore <ArrowRight className="h-4 w-4" />
                </button>
              </CardContent>
            </Card>

            {/* Industry Data Card */}
            <Card className="group bg-white/10 backdrop-blur-sm border-white/10 hover:bg-white/15 transition-all duration-300 text-white rounded-xl overflow-hidden shadow-2xl">
              <CardHeader className="pb-2 space-y-4">
                <BarChart3 className="h-6 w-6 text-white" />
                <CardTitle className="text-xl font-bold">Industry Data</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <CardDescription className="text-blue-100/80 text-sm leading-relaxed">
                  Sector-specific insights and competitive landscape analysis.
                </CardDescription>
                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider group-hover:gap-3 transition-all">
                  Explore <ArrowRight className="h-4 w-4" />
                </button>
              </CardContent>
            </Card>

            {/* Price Alerts Card */}
            <Card className="group bg-white/10 backdrop-blur-sm border-white/10 hover:bg-white/15 transition-all duration-300 text-white rounded-xl overflow-hidden shadow-2xl">
              <CardHeader className="pb-2 space-y-4">
                <Bell className="h-6 w-6 text-white" />
                <CardTitle className="text-xl font-bold">Price Alerts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <CardDescription className="text-blue-100/80 text-sm leading-relaxed">
                  Real-time notifications on commodity prices and market movements.
                </CardDescription>
                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider group-hover:gap-3 transition-all">
                  Explore <ArrowRight className="h-4 w-4" />
                </button>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Insights