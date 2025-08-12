"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Download, Save, FileText, CheckCircle2, Circle, Clock, Target, Code, Database, Globe, Server, GitBranch, Lightbulb, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Step {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  icon: React.ReactNode;
}

interface Phase {
  id: string;
  title: string;
  timeline: string;
  description: string;
  steps: Step[];
}

export default function Results() {
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());

  // Mock data - in a real app, this would come from the API/state
  const roadmapData = {
    goal: "Become a Full-Stack Developer",
    duration: "6 months",
    estimatedHours: "240 hours",
    phases: [
      {
        id: "phase-1",
        title: "Phase 1: Foundations",
        timeline: "Week 1–4",
        description: "Build your programming fundamentals and understanding of web technologies",
        steps: [
          {
            id: "step-1-1",
            title: "Learn HTML & CSS Basics",
            description: "Master semantic HTML and responsive CSS layouts",
            completed: false,
            icon: <Globe className="h-4 w-4" />
          },
          {
            id: "step-1-2",
            title: "JavaScript Fundamentals",
            description: "Variables, functions, objects, arrays, and DOM manipulation",
            completed: false,
            icon: <Code className="h-4 w-4" />
          },
          {
            id: "step-1-3",
            title: "Version Control with Git",
            description: "Learn Git commands, branching, and GitHub workflow",
            completed: false,
            icon: <GitBranch className="h-4 w-4" />
          },
          {
            id: "step-1-4",
            title: "Build Your First Website",
            description: "Create a personal portfolio website using HTML, CSS, and JavaScript",
            completed: false,
            icon: <Target className="h-4 w-4" />
          }
        ]
      },
      {
        id: "phase-2",
        title: "Phase 2: Frontend Framework",
        timeline: "Week 5–8",
        description: "Learn modern frontend development with React",
        steps: [
          {
            id: "step-2-1",
            title: "React Fundamentals",
            description: "Components, JSX, props, state, and event handling",
            completed: false,
            icon: <Code className="h-4 w-4" />
          },
          {
            id: "step-2-2",
            title: "State Management",
            description: "Learn React hooks, context API, and state patterns",
            completed: false,
            icon: <Database className="h-4 w-4" />
          },
          {
            id: "step-2-3",
            title: "Routing & Navigation",
            description: "Implement client-side routing with React Router",
            completed: false,
            icon: <Globe className="h-4 w-4" />
          },
          {
            id: "step-2-4",
            title: "Build a React App",
            description: "Create a multi-page application with dynamic functionality",
            completed: false,
            icon: <Target className="h-4 w-4" />
          },
          {
            id: "step-2-5",
            title: "Styling & UI Libraries",
            description: "Learn CSS-in-JS, Tailwind CSS, or component libraries",
            completed: false,
            icon: <Lightbulb className="h-4 w-4" />
          }
        ]
      },
      {
        id: "phase-3",
        title: "Phase 3: Backend Development",
        timeline: "Week 9–16",
        description: "Build server-side applications and APIs",
        steps: [
          {
            id: "step-3-1",
            title: "Node.js & Express",
            description: "Server setup, middleware, routing, and REST APIs",
            completed: false,
            icon: <Server className="h-4 w-4" />
          },
          {
            id: "step-3-2",
            title: "Database Integration",
            description: "Learn SQL/NoSQL databases and ORMs",
            completed: false,
            icon: <Database className="h-4 w-4" />
          },
          {
            id: "step-3-3",
            title: "Authentication & Security",
            description: "User authentication, JWT tokens, and security best practices",
            completed: false,
            icon: <Code className="h-4 w-4" />
          },
          {
            id: "step-3-4",
            title: "API Development",
            description: "Build and document RESTful APIs with proper error handling",
            completed: false,
            icon: <Globe className="h-4 w-4" />
          }
        ]
      },
      {
        id: "phase-4",
        title: "Phase 4: Full-Stack Integration",
        timeline: "Week 17–24",
        description: "Connect frontend and backend to build complete applications",
        steps: [
          {
            id: "step-4-1",
            title: "Frontend-Backend Integration",
            description: "Connect React app to your API with proper data fetching",
            completed: false,
            icon: <Code className="h-4 w-4" />
          },
          {
            id: "step-4-2",
            title: "Deployment & DevOps",
            description: "Deploy applications to cloud platforms and set up CI/CD",
            completed: false,
            icon: <Server className="h-4 w-4" />
          },
          {
            id: "step-4-3",
            title: "Testing & Quality Assurance",
            description: "Write unit tests, integration tests, and implement QA practices",
            completed: false,
            icon: <Target className="h-4 w-4" />
          },
          {
            id: "step-4-4",
            title: "Final Portfolio Project",
            description: "Build a complete full-stack application showcasing all skills",
            completed: false,
            icon: <Lightbulb className="h-4 w-4" />
          }
        ]
      }
    ]
  };

  const toggleStep = (stepId: string) => {
    const newCompleted = new Set(completedSteps);
    if (newCompleted.has(stepId)) {
      newCompleted.delete(stepId);
    } else {
      newCompleted.add(stepId);
    }
    setCompletedSteps(newCompleted);
  };

  const totalSteps = roadmapData.phases.reduce((acc, phase) => acc + phase.steps.length, 0);
  const completedCount = completedSteps.size;
  const progressPercentage = Math.round((completedCount / totalSteps) * 100);

  return (
    <div className="min-h-screen  bg-blue-800 relative overflow-hidden">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20 animate-pulse" />
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/98 to-background/95" />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <Link href="/" className="inline-flex items-center text-black hover:text-muted-foreground transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Generator
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/dashboard" className="inline-flex items-center text-black hover:text-muted-foreground transition-colors">
                Dashboard
              </Link>
            </div>
            
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#5964FC] to-[#9134EA] bg-clip-text text-transparent mb-2">
                  {roadmapData.goal}
                </h1>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="secondary" className="text-sm px-3 py-1">
                    <Clock className="h-3 w-3 mr-1" />
                    {roadmapData.duration}
                  </Badge>
                  <Badge variant="outline" className="text-sm px-3 py-1">
                    {roadmapData.estimatedHours} total
                  </Badge>
                  <Badge variant="outline" className="text-sm px-3 py-1">
                    {progressPercentage}% Complete ({completedCount}/{totalSteps})
                  </Badge>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              <Button variant="default" className="bg-gradient-to-r from-cool-blue-500 via-primary to-cool-teal-500 hover:from-cool-blue-400 hover:to-cool-teal-400 font-medium shadow-soft hover:shadow-glow-lg transition-all duration-300 rounded-xl">
                <Download className="h-4 w-4 mr-2" />
                Download as PDF
              </Button>
              <Button variant="outline">
                <Save className="h-4 w-4 mr-2" />
                Save to Account
              </Button>
              <Button variant="outline">
                <FileText className="h-4 w-4 mr-2" />
                Export to Notion
              </Button>
            </div>
          </div>

          {/* Progress overview */}
          <Card className="mb-8 bg-card/50 backdrop-blur-sm border-border/20">
            <CardHeader>
              <CardTitle className="text-lg">Your Progress</CardTitle>
              <CardDescription>
                Track your journey through each phase of learning
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full bg-muted rounded-full h-3 mb-2">
                <div 
                  className="bg-gradient-to-r from-primary to-gradient-via h-3 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <p className="text-sm text-muted-foreground">
                {completedCount} of {totalSteps} steps completed
              </p>
            </CardContent>
          </Card>

          {/* Phases */}
          <div className="space-y-6">
            <Accordion type="multiple" defaultValue={["phase-1"]} className="space-y-4">
              {roadmapData.phases.map((phase) => (
                <AccordionItem 
                  key={phase.id} 
                  value={phase.id}
                  className="border-0"
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border/20 shadow-lg hover:shadow-xl transition-all duration-300">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-center justify-between w-full mr-4">
                        <div className="text-left">
                          <h3 className="text-lg font-semibold">{phase.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            {phase.description}
                          </p>
                        </div>
                        <Badge variant="secondary" className="ml-4 whitespace-nowrap">
                          {phase.timeline}
                        </Badge>
                      </div>
                    </AccordionTrigger>
                    
                    <AccordionContent className="px-6 pb-6">
                      <div className="space-y-3 mt-4">
                        {phase.steps.map((step) => (
                          <div
                            key={step.id}
                            className="flex items-start gap-3 p-4 rounded-lg bg-background/50 border border-border/30 hover:border-border/50 transition-all duration-200 cursor-pointer"
                            onClick={() => toggleStep(step.id)}
                          >
                            <button className="mt-0.5 flex-shrink-0">
                              {completedSteps.has(step.id) ? (
                                <CheckCircle2 className="h-5 w-5 text-primary" />
                              ) : (
                                <Circle className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                              )}
                            </button>
                            
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-primary">{step.icon}</span>
                                <h4 className={`font-medium ${completedSteps.has(step.id) ? 'line-through text-muted-foreground' : ''}`}>
                                  {step.title}
                                </h4>
                              </div>
                              <p className={`text-sm ${completedSteps.has(step.id) ? 'text-muted-foreground' : 'text-muted-foreground'}`}>
                                {step.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </Card>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Footer */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Need to adjust your roadmap? Go back and generate a new one with different parameters.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/">
                <Button variant="outline">
                  Generate New Roadmap
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button className="bg-gradient-to-r from-cool-blue-500 via-primary to-cool-teal-500 hover:from-cool-blue-400 hover:to-cool-teal-400 font-medium shadow-soft hover:shadow-glow-lg transition-all duration-300 rounded-xl">
                  View Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
