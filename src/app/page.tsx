"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation"; 
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, Zap, Target } from "lucide-react";

export default function Home() {
  const router = useRouter();
  const [goal, setGoal] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [timeCommitment, setTimeCommitment] = useState("");
  const [targetDuration, setTargetDuration] = useState("");

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
        <Card className="w-full max-w-2xl mx-auto bg-card/60 backdrop-blur-md border border-border/30 shadow-lg hover:shadow-[0_0_20px_#5964FC] transition-all duration-1000 rounded-2xl">
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
                className="h-14 text-lg bg-background/60 border-border/40 focus:border-primary/60 focus:shadow-glow transition-all duration-300 rounded-xl font-medium"
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
                  <SelectTrigger className="h-12 bg-background/60 border-border/40 focus:border-primary/60 focus:shadow-glow transition-all duration-300 rounded-xl font-medium">
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
                  <SelectTrigger className="h-12 bg-background/60 border-border/40 focus:border-primary/60 focus:shadow-glow transition-all duration-300 rounded-xl font-medium">
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
                  <SelectTrigger className="h-12 bg-background/60 border-border/40 focus:border-primary/60 focus:shadow-glow transition-all duration-300 rounded-xl font-medium">
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

            {/* Generate button */}
            <Button
              onClick={handleGenerateRoadmap}
              disabled={!goal.trim()} /* #DBEAFE - for the background*/
              className="w-full h-14 text-lg font-semibold font-inter bg-gradient-to-br from-[#5964FC] via-[#9134EA] to-[#faa3d3] hover:from-cool-blue-400 hover:to-cool-teal-400 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-glow-lg disabled:opacity-50 disabled:transform-none rounded-xl"
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
      </div>
    </div>
  );
}
