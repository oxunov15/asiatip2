"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Zap,
  Bell,
  WorkflowIcon as Widget,
  MessageSquare,
  BarChart3,
  ArrowRight,
  Star,
  Check,
  Globe,
  ChevronDown,
  User,
  Play,
  Users,
  TrendingUp,
  Shield,
  Sparkles,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AsiaTipLanding() {
  const [selectedLanguage, setSelectedLanguage] = useState("🇺🇿 UZ")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const languages = [
    { flag: "🇺🇿", code: "UZ", name: "Uzbek" },
    { flag: "🇰🇿", code: "KZ", name: "Kazakh" },
    { flag: "🇰🇬", code: "KG", name: "Kyrgyz" },
    { flag: "🇹🇯", code: "TJ", name: "Tajik" },
    { flag: "🇷🇺", code: "RU", name: "Russian" },
  ]

  const features = [
    {
      icon: Bell,
      title: "Real-time Alerts",
      description: "Get instant notifications when fans send tips with custom sound effects and animations",
    },
    {
      icon: Widget,
      title: "Overlay Widgets",
      description: "Seamlessly integrate donation widgets into your streaming setup with OBS compatibility",
    },
    {
      icon: MessageSquare,
      title: "Fan Message Wall",
      description: "Display supporter messages in real-time with customizable themes and moderation tools",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Track your earnings, top supporters, and engagement metrics with detailed insights",
    },
  ]

  const steps = [
    {
      number: "01",
      title: "Create Account",
      description: "Sign up in seconds and customize your creator profile",
    },
    {
      number: "02",
      title: "Set Up Widgets",
      description: "Add our overlay widgets to your streaming software",
    },
    {
      number: "03",
      title: "Share Your Link",
      description: "Share your unique AsiaTip link with your audience",
    },
    {
      number: "04",
      title: "Start Earning",
      description: "Receive tips instantly with real-time notifications",
    },
  ]

  const testimonials = [
    {
      name: "Aziza Karimova",
      role: "Gaming Streamer",
      country: "🇺🇿 Uzbekistan",
      content:
        "AsiaTip changed my streaming game! The real-time alerts keep my audience engaged and the analytics help me understand my community better.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Dmitri Volkov",
      role: "Music Producer",
      country: "🇰🇿 Kazakhstan",
      content:
        "Finally, a platform that understands Central Asian creators. The interface is intuitive and the support team is amazing!",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Aida Sultanova",
      role: "Art Streamer",
      country: "🇰🇬 Kyrgyzstan",
      content:
        "The overlay widgets are so smooth and customizable. My viewers love the interactive experience AsiaTip provides.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  const pricingPlans = [
    {
      name: "Free",
      price: "0",
      currency: "$",
      period: "/month",
      description: "Perfect for getting started",
      features: ["Up to 50 tips/month", "Basic overlay widgets", "Standard alerts", "Community support"],
      popular: false,
    },
    {
      name: "Pro",
      price: "9.99",
      currency: "$",
      period: "/month",
      description: "For growing creators",
      features: [
        "Unlimited tips",
        "Advanced widgets",
        "Custom alerts & sounds",
        "Analytics dashboard",
        "Priority support",
      ],
      popular: false,
    },
    {
      name: "Premium",
      price: "19.99",
      currency: "$",
      period: "/month",
      description: "For professional streamers",
      features: [
        "Everything in Pro",
        "White-label branding",
        "Advanced analytics",
        "API access",
        "Dedicated support",
        "Custom integrations",
      ],
      popular: true,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/80 backdrop-blur-md border-b border-cyan-500/20" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/25">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-lg blur-md opacity-50 animate-pulse"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              AsiaTip
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-gray-300 hover:text-cyan-400 transition-colors">
              How it Works
            </Link>
            <Link href="#pricing" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Pricing
            </Link>
          </nav>

          {/* Language Switcher & Login */}
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <button className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-cyan-500/50 transition-colors">
                <span>{selectedLanguage}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setSelectedLanguage(`${lang.flag} ${lang.code}`)}
                    className="w-full flex items-center space-x-3 px-4 py-2 hover:bg-gray-700 first:rounded-t-lg last:rounded-b-lg transition-colors"
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>
            <Button variant="outline" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 bg-transparent">
              <User className="w-4 h-4 mr-2" />
              Login
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-pink-500/10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 border-cyan-500/30 text-cyan-300">
              <Sparkles className="w-4 h-4 mr-2" />
              Built for Central Asian Creators
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-pink-200 bg-clip-text text-transparent">
                Supercharge Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-green-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                Creator Journey
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              The ultimate donation platform designed for streamers and content creators across Central Asia. Get
              real-time tips, engage your audience, and grow your community like never before.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-105"
              >
                Start Receiving Tips Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-600 text-gray-300 hover:border-cyan-500 hover:text-cyan-400 px-8 py-4 text-lg bg-transparent"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            <div className="mt-12 flex justify-center items-center space-x-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-cyan-400" />
                <span>10K+ Creators</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span>$2M+ Processed</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-pink-400" />
                <span>100% Secure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-green-500/20 to-cyan-500/20 border-green-500/30 text-green-300">
              Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Everything You Need to
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Engage Your Audience
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Powerful tools designed to help you connect with your fans and monetize your content effectively
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <CardTitle className="text-white group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-pink-500/20 to-purple-500/20 border-pink-500/30 text-pink-300">
              How It Works
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Get Started in
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                4 Simple Steps
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-pink-500/25 group-hover:shadow-pink-500/40 transition-all duration-300">
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-pink-500/50 to-transparent"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-pink-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-cyan-500/20 to-green-500/20 border-cyan-500/30 text-cyan-300">
              Testimonials
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Loved by Creators
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                Across Central Asia
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                      <p className="text-sm text-cyan-400">{testimonial.country}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-green-500/20 to-cyan-500/20 border-green-500/30 text-green-300">
              Pricing
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Choose Your</span>
              <br />
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Perfect Plan
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Start free and scale as you grow. All plans include our core features with no hidden fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular
                    ? "border-2 border-gradient-to-r from-cyan-500 to-pink-500 shadow-2xl shadow-cyan-500/25"
                    : "hover:border-cyan-500/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-4 py-1 shadow-lg">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-white mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">
                      {plan.currency}
                      {plan.price}
                    </span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <CardDescription className="text-gray-400">{plan.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full py-3 ${
                      plan.popular
                        ? "bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 shadow-lg shadow-cyan-500/25"
                        : "bg-gray-700 hover:bg-gray-600 text-white"
                    }`}
                  >
                    {plan.name === "Free" ? "Get Started Free" : "Choose Plan"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
                  AsiaTip
                </span>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering Central Asian creators with the ultimate donation platform.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    API
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Status
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Licenses
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">© 2024 AsiaTip. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              <Globe className="w-5 h-5 text-gray-400" />
              <span className="text-gray-400">Available in 5 languages</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
