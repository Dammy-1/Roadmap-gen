"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation"; 
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sparkles, MapPin, Target, Clock, CheckCircle2, ArrowRight, Zap, Star, Download, Save, FileText, ChevronDown, ChevronRight, BarChart3, User, Settings, LogOut, Menu, Home, BookOpen, HelpCircle, Mail, Phone, MapPin as LocationIcon, Linkedin, Github, Facebook, Instagram, Users, Award, Brain, Rocket, Shield, TrendingUp, PlayCircle, Quote, MessageSquare, ArrowUp } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useSession, signOut } from "next-auth/react";
import SignInDialog from "@/components/auth/SignInDialog";

interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  completed?: boolean;
  checklist?: string[];
}

interface GeneratedRoadmap {
  title: string;
  description: string;
  totalDuration: string;
  steps: RoadmapStep[];
}

export default function Index() {
  const router = useRouter();
  const [goal, setGoal] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [timeCommitment, setTimeCommitment] = useState("");
  const [targetDuration, setTargetDuration] = useState("");
  const [description, setDescription] = useState("");
  const { data: session } = useSession();

  const handleGenerateRoadmap = () => {
    // TODO: In a real app, this would send data to API and generate roadmap
    console.log("Generating roadmap for:", {
      goal,
      experienceLevel,
      timeCommitment,
      targetDuration,
    });

    // Navigate to results page
    router.push("/results");
  };
  return (
    <div className="min-h-screen bg-blue-800 relative overflow-hidden">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-10 animate-pulse" />
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/95 to-background/90" />
      {/* Header */}
      <div className="border-b bg-white/80 backdrop-blur-md shadow-sm">
        <div className="w-4/5 mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer">
              <div className="p-2 bg-gradient-to-r from-[#5964FC] to-[#9134EA] rounded-lg">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[#5964FC] to-[#9134EA] bg-clip-text text-transparent">
                RoadmapAI
              </h1>
            </Link>

            {/* Centered Navigation */}
            <nav className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
              <Link href="#" className="flex items-center gap-2 text-gray-600 hover:text-[#5964FC] transition-colors font-medium">
                <BarChart3 className="h-4 w-4" />
                Dashboard
              </Link>
              <Link href="#" className="flex items-center gap-2 text-gray-600 hover:text-[#5964FC] transition-colors font-medium">
                <BookOpen className="h-4 w-4" />
                Library
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#5964FC] transition-colors font-medium">
                Pricing
              </Link>
              <Link href="#" className="flex items-center gap-2 text-gray-600 hover:text-[#5964FC] transition-colors font-medium">
                <HelpCircle className="h-4 w-4" />
                Help
              </Link>
            </nav>

            {/* User Actions */}
            <div className="flex items-center gap-4">

              {/* User Profile Dropdown */}
              {session ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-2 hover:bg-violet-50">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-gradient-to-r from-[#5964FC] to-[#9134EA] text-white text-sm">
                          {session.user?.name?.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <span className="hidden sm:inline text-sm font-medium">{session.user?.name}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuItem className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center gap-2">
                      <Settings className="h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="flex items-center gap-2 text-red-600 focus:text-red-600"
                      onClick={() => signOut({ callbackUrl: "/" })}
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Sign Out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <div className="flex items-center gap-2">
                  <SignInDialog />
                  <button
                    onClick={() => router.push("/sign-up")}
                    className="bg-gradient-to-r from-[#5964FC] to-[#9134EA] text-white px-6 py-3 rounded-xl"
                  >
                    Get Started
                  </button>
                </div>
              )}

              {/* Mobile Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="md:hidden">
                    <Menu className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem>
                    <Link href="/dashboard" className="flex items-center gap-2 w-full">
                      <BarChart3 className="h-4 w-4" />
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="#" className="flex items-center gap-2 w-full">
                      <BookOpen className="h-4 w-4" />
                      Library
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="#" className="w-full">
                      Pricing
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="#" className="flex items-center gap-2 w-full">
                      <HelpCircle className="h-4 w-4" />
                      Help
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12 max-w-4xl">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <Sparkles className="h-12 w-12 text-[#754CF3] animate-pulse" />
              <div className="absolute -top-1 -right-1 h-4 w-4 bg-primary rounded-full animate-ping opacity-50" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-inter bg-gradient-to-r from-[#5964FC] to-[#9134EA] bg-clip-text text-transparent mb-6 leading-tight tracking-tight">
            Roadmap Generator
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
            Transform your ambitions into actionable plans. Our AI analyzes your goals and creates personalized learning roadmaps tailored to your experience and schedule.
          </p>
        </div>

        {/* Main form card */}
        <Card className="w-full max-w-2xl mx-auto bg-card/60 backdrop-blur-md border border-border/30 shadow-lg hover:shadow-[0_0_20px_#5964FC] transition-all duration-500 rounded-2xl">
          <CardHeader className="text-center pb-8 px-8 pt-8">
            <CardTitle className="text-2xl md:text-3xl font-semibold font-inter mb-3">
              What's your next achievement?
            </CardTitle>
            <CardDescription className="text-base font-medium leading-relaxed">
              Tell us about your goal and we'll create a custom roadmap just for you
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-8 px-8 pb-8">
            {/* Goal input */}
            <div className="space-y-3">
              <label htmlFor="goal" className="text-sm font-medium text-foreground flex items-center gap-2">
                <Target className="h-4 w-4 text-[#5964FC]" />
                Your Goal
              </label>
              <Input
                id="goal"
                type="text"
                placeholder="What do you want to achieve?"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="h-12 text-lg border border-blue-200 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 rounded-xl font-medium"
              />
            </div>

            {/* Selection inputs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Experience Level */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground">
                  Experience Level
                </label>
                <Select value={experienceLevel} onValueChange={setExperienceLevel}>
                  <SelectTrigger className="h-12 border-blue-200 focus:border-blue-400 focus:ring-blue-400 rounded-xl font-medium">
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                    <SelectItem value="expert">Expert</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Time Commitment */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground">
                  Time Commitment
                </label>
                <Select value={timeCommitment} onValueChange={setTimeCommitment}>
                  <SelectTrigger className="h-12 border-blue-200 focus:border-blue-400 focus:ring-blue-400 rounded-xl font-medium">
                    <SelectValue placeholder="Hours per week" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-5">1-5 hours/week</SelectItem>
                    <SelectItem value="5-10">5-10 hours/week</SelectItem>
                    <SelectItem value="10-20">10-20 hours/week</SelectItem>
                    <SelectItem value="20+">20+ hours/week</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Target Duration */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground">
                  Target Duration
                </label>
                <Select value={targetDuration} onValueChange={setTargetDuration}>
                  <SelectTrigger className="h-12 border-blue-200 focus:border-blue-400 focus:ring-blue-400 rounded-xl font-medium">
                    <SelectValue placeholder="Timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-month">1 month</SelectItem>
                    <SelectItem value="3-months">3 months</SelectItem>
                    <SelectItem value="6-months">6 months</SelectItem>
                    <SelectItem value="1-year">1 year</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Optional Context */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Additional Context (Optional)</label>
              <Textarea
                placeholder="Tell us about your specific goals, preferences, or any other details..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="min-h-20 border-blue-200 focus:border-blue-400 focus:ring-blue-400 rounded-xl resize-none"
              />
            </div>

            {/* Generate button */}
            <Button
              onClick={handleGenerateRoadmap}
              disabled={!goal.trim()}
              className="w-full h-14 text-lg font-semibold font-inter bg-gradient-to-br from-[#5964FC] to-[#9134EA] hover:from-cool-blue-400 hover:to-cool-teal-400 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-glow-lg disabled:opacity-50 disabled:transform-none rounded-xl"
            >
              <Zap className="mr-2 h-5 w-5" />
              Generate My Roadmap
            </Button>
          </CardContent>
        </Card>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-18 max-w-5xl mx-auto">
          <div className="text-center p-8 rounded-2xl bg-card/40 backdrop-blur-md border border-border/30 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 group">
            <div className="w-14 h-14 bg-[#dceaff] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="h-7 w-7 text-[#5964FC] animate-pulse" />
            </div>
            <h3 className="font-semibold font-inter text-lg mb-3">AI-Powered</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-medium">
              Advanced algorithms analyze your goals and create optimized learning paths
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-card/40 backdrop-blur-md border border-border/30 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 group">
            <div className="w-14 h-14 bg-[#f4e6ff] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Target className="h-7 w-7 text-[#9134EA] animate-pulse" />
            </div>
            <h3 className="font-semibold font-inter text-lg mb-3">Personalized</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-medium">
              Tailored to your experience level, schedule, and specific objectives
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-card/40 backdrop-blur-md border border-border/30 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 group">
            <div className="w-14 h-14 bg-[#ffeafc] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Zap className="h-7 w-7 text-[#faa3d3] animate-pulse" />
            </div>
            <h3 className="font-semibold font-inter text-lg mb-3">Actionable</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-medium">
              Clear milestones and actionable steps to keep you on track
            </p>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in">
              Trusted by Learners Worldwide
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of successful learners who have achieved their goals with RoadmapAI
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="border-0 bg-white/70 backdrop-blur-sm text-center group hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#5964FC] to-[#9134EA] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  50K+
                </div>
                <p className="text-gray-600 font-medium">Active Learners</p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/70 backdrop-blur-sm text-center group hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#5964FC] to-[#9134EA] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  500+
                </div>
                <p className="text-gray-600 font-medium">Skills Covered</p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/70 backdrop-blur-sm text-center group hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#5964FC] to-[#9134EA] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  95%
                </div>
                <p className="text-gray-600 font-medium">Success Rate</p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/70 backdrop-blur-sm text-center group hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#5964FC] to-[#9134EA] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  24/7
                </div>
                <p className="text-gray-600 font-medium">AI Support</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mt-24 ">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How RoadmapAI Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our intelligent system creates personalized learning paths in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 w-4/5 mx-auto px-4 py-4">
            <div className="text-center group">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-[#5964FC] to-[#9134EA] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Brain className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">
                  1
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Tell Us Your Goal</h3>
              <p className="text-gray-600 leading-relaxed">
                Simply enter what you want to learn or achieve. Our AI understands context and skill requirements.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-[#9134EA] to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Sparkles className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-sm">
                  2
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">AI Generates Your Path</h3>
              <p className="text-gray-600 leading-relaxed">
                Our advanced AI creates a detailed, step-by-step roadmap tailored to your experience level and goals.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Rocket className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-bold text-sm">
                  3
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Start Learning</h3>
              <p className="text-gray-600 leading-relaxed">
                Follow your personalized roadmap, track progress, and achieve your goals faster than ever before.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose RoadmapAI?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the future of personalized learning with cutting-edge AI technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-4/5 mx-auto px-4 py-4">
            <Card className="border-0 bg-white/70 backdrop-blur-sm group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900">Trusted & Reliable</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our roadmaps are validated by industry experts and backed by proven learning methodologies.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/70 backdrop-blur-sm group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900">Community Support</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Connect with fellow learners, share progress, and get support from our vibrant community.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/70 backdrop-blur-sm group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900">Progress Tracking</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Monitor your advancement with detailed analytics and celebrate milestones along the way.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/70 backdrop-blur-sm group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900">Skill Certification</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Earn certificates and badges as you complete roadmap phases and achieve your learning goals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/70 backdrop-blur-sm group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900">Resource Library</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Access curated resources, tutorials, and materials specifically chosen for your learning path.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/70 backdrop-blur-sm group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900">Goal-Oriented</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Every roadmap is designed with clear objectives and measurable outcomes for maximum success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Learners Say
            </h2>
            <p className="text-lg text-gray-600">
              Real stories from real people who transformed their careers with RoadmapAI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 w-4/5 mx-auto px-4 py-4">
            <Card className="border-0 bg-white/70 backdrop-blur-sm group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-blue-300 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "RoadmapAI completely transformed my career transition. The structured approach made learning React and getting my first dev job achievable in just 6 months!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#5964FC] to-[#9134EA] rounded-full flex items-center justify-center text-white font-bold">
                    SC
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Sarah Chen</p>
                    <p className="text-sm text-gray-600">Frontend Developer at Google</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/70 backdrop-blur-sm group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-blue-300 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "The AI roadmap was incredibly accurate. It identified exactly what I needed to learn for data science and in the perfect sequence."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#9134EA] to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                    MJ
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Marcus Johnson</p>
                    <p className="text-sm text-gray-600">Data Scientist at Microsoft</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/70 backdrop-blur-sm group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-blue-300 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "I love how the platform adapts to my pace. The progress tracking and community support kept me motivated throughout my UX design journey."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold">
                    ER
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Elena Rodriguez</p>
                    <p className="text-sm text-gray-600">UX Designer at Airbnb</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-24">
          <Card className="border-0 shadow-2xl bg-gradient-to-r from-[#5964FC] via-[#9134EA] to-pink-600 text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-black/10"></div>
            <CardContent className="p-12 text-center relative z-10">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold mb-6">
                  Ready to Transform Your Learning Journey?
                </h2>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Join thousands of successful learners who have achieved their goals with RoadmapAI.
                  Start your personalized learning adventure today and unlock your full potential.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 px-8 py-3 text-lg font-semibold rounded-xl shadow-lg"
                  >
                    <Rocket className="h-5 w-5 mr-2" />
                    Start Learning Now
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-blue-600 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 px-8 py-3 text-lg font-semibold rounded-xl"
                  >
                    <PlayCircle className="h-5 w-5 mr-2" />
                    Watch Demo
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          size="lg"
          className="rounded-full w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
          <ArrowUp className="h-5 w-5" />
        </Button>
      </div>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-md border-t border-gray-200 mt-24">
        <div className="w-4/5 mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  RoadmapAI
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Empowering learners worldwide with AI personalized roadmaps. Transform your goals into structured learning paths.
              </p>
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" className="p-2 h-auto group">
                  <svg className="h-5 w-5 text-gray-600 group-hover:text-black transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </Button>
                <Button variant="ghost" size="sm" className="p-2 h-auto group">
                  <Linkedin className="h-5 w-5 text-gray-600 group-hover:text-[#0077B5] transition-colors" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 h-auto group">
                  <Github className="h-5 w-5 text-gray-600 group-hover:text-black transition-colors" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 h-auto group">
                  <Facebook className="h-5 w-5 text-gray-600 group-hover:text-[#1877F2] transition-colors" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 h-auto group">
                  <Instagram className="h-5 w-5 text-gray-600 group-hover:text-[#E4405F] transition-colors" />
                </Button>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="/app" className="text-gray-600 hover:text-violet-600 transition-colors">Generate Roadmap</Link></li>
                <li><Link href="/dashboard" className="text-gray-600 hover:text-violet-600 transition-colors">Dashboard</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-violet-600 transition-colors">Templates</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-violet-600 transition-colors">Progress Tracking</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-violet-600 transition-colors">Integrations</Link></li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="#" className="text-gray-600 hover:text-violet-600 transition-colors">Help Center</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-violet-600 transition-colors">Documentation</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-violet-600 transition-colors">API Reference</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-violet-600 transition-colors">Community</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-violet-600 transition-colors">Status Page</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2 text-gray-600">
                  <Mail className="h-4 w-4" />
                  support@roadmapai.com
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <Phone className="h-4 w-4" />
                  +234 703-705-8478
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <LocationIcon className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>123 Innovation Drive<br />Lekki, LA 100101</span>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <Link href="#" className="hover:text-violet-600 transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-violet-600 transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-violet-600 transition-colors">Cookie Policy</Link>
            </div>
            <div className="text-sm text-gray-600">
              © 2025 RoadmapAI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
