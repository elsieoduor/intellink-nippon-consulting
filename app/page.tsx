
import Image from "next/image";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Solutions from "./_components/Solutions";
import Why from "./_components/Why";
import Insights from "./_components/Insights";
import Testimonials from "./_components/Testimonials";
import CTA from "./_components/CTA";
import { Briefcase, Check, ArrowRight, ShoppingCart } from "lucide-react";
import ExpertNetwork from "./_components/Network";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero/>
      <About/>
      <Solutions/>
      <Why/>
      <ExpertNetwork/>
      <Insights/>
      <div>
         <section className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* LEFT — Register as Supplier */}
            <div className="bg-[#FBF4E6] px-6 py-16 sm:px-10 lg:px-16 flex items-center">
              <div className="max-w-md mx-auto text-center lg:text-left space-y-6">
                <Briefcase className="w-12 h-12 mx-auto lg:mx-0 text-gray-900" />
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Register as Supplier
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-1 text-gray-900" />
                    <span>Access thousands of verified buyers worldwide</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-1 text-gray-900" />
                    <span>Showcase your products with detailed catalogs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-1 text-gray-900" />
                    <span>Receive direct inquiries and negotiate deals</span>
                  </li>
                </ul>

                <button className="inline-flex items-center gap-2 mt-4 rounded-full bg-red-500 px-8 py-3 text-white font-medium hover:bg-red-600 transition">
                  Start Selling
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* RIGHT — Find Suppliers */}
            <div className="bg-[#111C2E] px-6 py-16 sm:px-10 lg:px-16 flex items-center">
              <div className="max-w-md mx-auto text-center lg:text-left space-y-6 text-white">

                <ShoppingCart className="w-12 h-12 mx-auto lg:mx-0" />

                <h3 className="text-2xl sm:text-3xl font-bold">
                  Find Suppliers
                </h3>

                <ul className="space-y-4 text-gray-200">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-1" />
                    <span>Browse verified suppliers across multiple industries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-1" />
                    <span>Compare prices and quality certifications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-1" />
                    <span>Connect directly with manufacturers and distributors</span>
                  </li>
                </ul>

                <button className="inline-flex items-center gap-2 mt-4 rounded-full border border-white px-8 py-3 font-medium hover:bg-white hover:text-[#111C2E] transition">
                  Browse Catalog
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </section>
      </div>
      <Testimonials/>
      <CTA/>
    </div>
  );
}
