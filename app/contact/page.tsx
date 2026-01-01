"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Send } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    location: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      location: "",
      message: "",
    })
    alert("Thank you for your message! We'll get back to you soon.")
  }

  // Functional Google Maps Embed URL for Shibuya
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7479754683545!2d139.701336!3d35.65858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b563a48e8f7%3A0xcc37609802d3383a!2sShibuya%20Crossing!5e0!3m2!1sen!2sjp!4v1700000000000!5m2!1sen!2sjp";

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1e293b]">
              Get in Touch
            </h1>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
              Whether you're looking to expand into new markets, find expert consultants, or access market intelligence, our team is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-16 lg:grid-cols-2 items-start">
            
            {/* Contact Information */}
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-bold text-[#1e293b] mb-8">Contact Information</h2>
                <div className="space-y-8">
                  <div className="flex items-center space-x-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f87171]/10 text-[#f87171]">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Address</h3>
                      <p className="text-slate-600">Shibuya City, Tokyo, Japan</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f87171]/10 text-[#f87171]">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Phone</h3>
                      <p className="text-slate-600">+81-80-5643-1501</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f87171]/10 text-[#f87171]">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Email</h3>
                      <p className="text-slate-600">info@intellinknippon.co.jp</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Added a secondary card for extra professional touch */}
              <div className="p-8 bg-[#2d3748] rounded-2xl text-white">
                <h3 className="text-xl font-bold mb-2">Partner with us</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Join our expert network or inquire about strategic trade advisory 
                  solutions specifically tailored for the Japan-Africa corridor.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-none shadow-2xl rounded-2xl overflow-hidden">
              <CardHeader className="bg-white border-b border-slate-50 p-8">
                <CardTitle className="text-2xl font-bold">Send us a Message</CardTitle>
                <CardDescription className="text-slate-500">
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-semibold">Full Name *</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="John Doe" required className="rounded-lg border-slate-200 focus:ring-[#f87171]" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-semibold">Email Address *</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="john@example.com" required className="rounded-lg border-slate-200" />
                    </div>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-semibold">Phone Number</Label>
                      <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} placeholder="+81..." className="rounded-lg border-slate-200" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location" className="text-sm font-semibold">Location</Label>
                      <Input id="location" name="location" value={formData.location} onChange={handleInputChange} placeholder="Tokyo, Japan" className="rounded-lg border-slate-200" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Select onValueChange={handleSelectChange} required>
                      <SelectTrigger className="w-full bg-white border-slate-200 focus:ring-[#f87171]">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                        <SelectItem value="Business Consulting">Business Consulting</SelectItem>
                        <SelectItem value="Trade Marketing">Trade Marketing</SelectItem>
                        <SelectItem value="Market Reports">Market Reports</SelectItem>
                        <SelectItem value="ExpertConnect™">ExpertConnect™</SelectItem>
                        <SelectItem value="TradeLink™">TradeLink™</SelectItem>
                        <SelectItem value="MarketLink™">MarketLink™</SelectItem>
                        <SelectItem value="Partnership Opportunity">Partnership Opportunity</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-semibold">Message *</Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="How can we assist your business expansion?" rows={5} required className="rounded-lg border-slate-200" />
                  </div>
                  <Button type="submit" className="w-full h-12 bg-[#f87171] hover:bg-[#e11d48] text-white font-bold rounded-xl transition-all shadow-lg shadow-red-200">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e293b] mb-4">Visit Our Office</h2>
            <div className="w-16 h-1 bg-[#f87171] mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-6xl mx-auto h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <iframe
              title="Office Location"
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[20%] contrast-[1.1]"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}