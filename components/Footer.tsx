import { Button } from './ui/button'
import { Award, Clock, Home, Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="bg-card border-t-2 border-border py-8 sm:py-12 px-4">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8 lg:mb-12">
            <div className="sm:col-span-2 lg:col-span-2 space-y-4 lg:space-y-6">
              <Link href="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
                <div className="relative h-10 w-10 sm:h-12 sm:w-12">
                  <Image
                    src="/logo.jpeg" // Ensure your logo is in the public folder
                    alt="Intellink Nippon Logo"
                    fill
                    className="object-contain"
                    priority // Ensures the logo loads immediately for SEO and UX
                  />
                </div>
                <span className="font-heading text-xl sm:text-2xl font-bold text-[#1e293b] tracking-tight">
                  Intellink Nippon
                </span>
              </Link>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-md">
                Connecting businesses across borders with expertise, intelligence, and trusted partnerships.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  <span>Licensed & Insured</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-heading font-semibold text-base sm:text-lg text-card-foreground">Quick Links</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
                  >
                    About Intellink
                  </Link>
                </li> 
                <li>
                  <Link
                    href="/services"
                    className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources"
                    className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
                  >
                    Resources
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sector"
                    className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
                  >
                     Sector
                  </Link>
                </li>
                <li>
                  <Link
                    href="/recruitment"
                    className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
                  >
                    Recruitment
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-heading font-semibold text-base sm:text-lg text-card-foreground">Get In Touch</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-center gap-3 text-muted-foreground text-sm sm:text-base">
                  <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>(+81)-80-5643-1501</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground text-sm sm:text-base">
                  <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>info@intellinknippon.co.jp</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground text-sm sm:text-base">
                  <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span>Shibuya, Tokyo</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-4 sm:pt-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
                © {new Date().getFullYear()} Intellink Nippon Consulting LLC. All rights reserved.
              </p>
              <div className="flex gap-3 sm:gap-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground bg-transparent text-xs sm:text-sm"
                >
                  Facebook
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground bg-transparent text-xs sm:text-sm"
                >
                  Instagram
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground bg-transparent text-xs sm:text-sm"
                >
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer