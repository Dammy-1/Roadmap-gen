"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { MapPin, Sparkles, Star, Clock, Target, TrendingUp, Users, Award, ChevronRight, Eye, EyeOff, Mail, Lock, User, CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../contexts/AuthContext";

export default function Landing() {
  const [activeTab, setActiveTab] = useState("signin");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  
  const router = useRouter();
  const { login } = useAuth();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await login(formData.email, formData.password);
      router.push("/");
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await login(formData.email, formData.password, formData.name);
      router.push("/");
    } catch (error) {
      console.error("Signup failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Learning",
      description: "Advanced AI creates personalized roadmaps tailored to your goals and experience level",
      color: "blue"
    },
    {
      icon: Clock,
      title: "Time-Optimized Paths",
      description: "Get realistic timelines and structured phases that fit your schedule",
      color: "indigo"
    },
    {
      icon: Target,
      title: "Goal-Focused Design",
      description: "Every roadmap is designed to help you achieve specific, measurable outcomes",
      color: "purple"
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Monitor your advancement with detailed progress metrics and milestones",
      color: "teal"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Connect with learners following similar paths and share your journey",
      color: "green"
    },
    {
      icon: Award,
      title: "Expert Validation",
      description: "All roadmaps are validated by industry experts and successful practitioners",
      color: "orange"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer",
      content: "RoadmapAI helped me transition from marketing to tech in just 8 months. The structured approach made all the difference!",
      avatar: "SC"
    },
    {
      name: "Marcus Johnson",
      role: "Data Scientist",
      content: "The AI-generated roadmap was spot on. It identified exactly what I needed to learn and in the perfect sequence.",
      avatar: "MJ"
    },
    {
      name: "Elena Rodriguez",
      role: "UX Designer",
      content: "I love how the platform adapts to my pace. The progress tracking keeps me motivated every day.",
      avatar: "ER"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-cool">
      {/* Header */}
      <div className="border-b border-blue-100/50 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-primary rounded-xl">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                RoadmapAI
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={() => setActiveTab("signin")}>
                Sign In
              </Button>
              <Button className="bg-gradient-primary rounded-xl" onClick={() => setActiveTab("signup")}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Hero Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-4 py-2">
                <Sparkles className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">AI-Powered Learning Platform</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Master Any Skill with
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Personalized Roadmaps
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Transform your learning journey with AI-generated roadmaps that adapt to your pace, schedule, and goals. Join thousands of learners achieving their dreams.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50K+</div>
                <div className="text-sm text-gray-600">Active Learners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">500+</div>
                <div className="text-sm text-gray-600">Skills Covered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-lg transition-all duration-200 rounded-xl px-8"
                onClick={() => setActiveTab("signup")}
              >
                Start Learning Today
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-xl border-blue-200">
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right Side - Auth Forms */}
          <div className="flex justify-center">
            <Card className="card-modern w-full max-w-md">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl">Welcome to RoadmapAI</CardTitle>
                <CardDescription>
                  Join thousands of learners achieving their goals
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-2 rounded-xl">
                    <TabsTrigger value="signin" className="rounded-lg">Sign In</TabsTrigger>
                    <TabsTrigger value="signup" className="rounded-lg">Sign Up</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="signin" className="space-y-4 mt-6">
                    <form onSubmit={handleSignIn} className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Email</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Input
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className="pl-10 rounded-xl border-blue-200"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Password</label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={(e) => handleInputChange("password", e.target.value)}
                            className="pl-10 pr-10 rounded-xl border-blue-200"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2"
                          >
                            {showPassword ? <EyeOff className="h-4 w-4 text-gray-400" /> : <Eye className="h-4 w-4 text-gray-400" />}
                          </button>
                        </div>
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-primary rounded-xl py-3"
                        disabled={isLoading}
                      >
                        {isLoading ? "Signing In..." : "Sign In"}
                      </Button>
                    </form>
                    
                    <div className="text-center">
                      <button className="text-sm text-blue-600 hover:underline">
                        Forgot your password?
                      </button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="signup" className="space-y-4 mt-6">
                    <form onSubmit={handleSignUp} className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Full Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Input
                            type="text"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            className="pl-10 rounded-xl border-blue-200"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Email</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Input
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className="pl-10 rounded-xl border-blue-200"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Password</label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Create a password"
                            value={formData.password}
                            onChange={(e) => handleInputChange("password", e.target.value)}
                            className="pl-10 pr-10 rounded-xl border-blue-200"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2"
                          >
                            {showPassword ? <EyeOff className="h-4 w-4 text-gray-400" /> : <Eye className="h-4 w-4 text-gray-400" />}
                          </button>
                        </div>
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-primary rounded-xl py-3"
                        disabled={isLoading}
                      >
                        {isLoading ? "Creating Account..." : "Create Account"}
                      </Button>
                    </form>
                    
                    <div className="text-center text-xs text-gray-500">
                      By signing up, you agree to our{" "}
                      <button className="text-blue-600 hover:underline">Terms of Service</button>{" "}
                      and{" "}
                      <button className="text-blue-600 hover:underline">Privacy Policy</button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything you need to succeed
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform combines cutting-edge AI with proven learning methodologies to create the most effective learning experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-modern text-center group hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-${feature.color}-50 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-${feature.color}-100/50 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`h-8 w-8 text-${feature.color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Loved by learners worldwide
            </h2>
            <p className="text-lg text-gray-600">
              See what our community has to say about their learning journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-modern">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex text-yellow-400 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24">
          <Card className="border-0 shadow-modern-lg bg-gradient-primary text-white rounded-2xl">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to accelerate your learning?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of successful learners who have transformed their careers with RoadmapAI. 
                Start your personalized learning journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="rounded-xl px-8"
                  onClick={() => setActiveTab("signup")}
                >
                  <CheckCircle2 className="h-5 w-5 mr-2" />
                  Get Started Free
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20 rounded-xl px-8"
                >
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-blue-100/50 bg-white/80 backdrop-blur-md mt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-primary rounded-xl">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-gray-900">RoadmapAI</span>
            </div>
            <div className="text-sm text-gray-600">
              © 2024 RoadmapAI. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
