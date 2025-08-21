"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles, ChevronRight, Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function SignupPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("signin");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setIsLoading(true);

    try {
      // Using NextAuth credentials provider
      const res = await signIn("credentials", {
        redirect: false,
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      if (res?.error) {
        setError(res.error);
      } else {
        router.push("/dashboard");
      }
    } catch (err) {
      console.error(err);
      setError("Signup failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOAuth = async (provider: "google" | "facebook") => {
    setIsLoading(true);
    try {
      await signIn(provider, { callbackUrl: "/dashboard" });
    } catch (err) {
      console.error(`${provider} login failed`, err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-10 animate-pulse" />
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/95 to-background/90" />
      <div className="container mx-auto px-4 min-h-screen flex items-center backdrop-blur-sm">
        <div className="grid lg:grid-cols-2 items-center">
          {/* Left Side - Hero Content */}
          <div className="space-y-8 pl-16">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-4 py-2">
                <Sparkles className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-[#5964FC]">AI-Powered Learning Platform</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Master Any Skill with
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Personalized Roadmaps
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl backdrop-blur-sm">
                Transform your learning journey with AI-generated roadmaps that adapt to your pace, schedule, and goals. Join thousands of learners achieving their dreams.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#5964FC] to-[#9134EA] bg-clip-text text-transparent">50K+</div>
                <div className="text-sm text-gray-600">Active Learners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#5964FC] to-[#9134EA] bg-clip-text text-transparent">500+</div>
                <div className="text-sm text-gray-600">Skills Covered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#5964FC] to-[#9134EA] bg-clip-text text-transparent">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#5964FC] to-[#9134EA] hover:from-[#4f5df3] hover:to-[#882be1] text-xl transition-all duration-200 rounded-3xl px-8 py-9"
                onClick={() => setActiveTab("signup")}
              >
                Start Learning Today
                <ChevronRight className="h-4 w-4" />
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
              {/* Potentially I could join This Sign up div up with welcome to roadmapAI */}
              <CardContent>
                <CardTitle className="rounded-lg">Sign Up</CardTitle>
                  {/* <TabsContent value="signup" className="space-y-4 mt-6"> */}
                    {error && <p className="text-red-500 text-sm">{error}</p>}
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
                      
                      {/* Confirm Password */}
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          type="password"
                          placeholder="Confirm Password"
                          value={formData.confirmPassword}
                          onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                          className="pl-10 rounded-xl"
                          required
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-[#5964FC] to-[#9134EA] hover:from-[#4f5df3] hover:to-[#882be1] rounded-xl py-3"
                        disabled={isLoading}
                      >
                        {isLoading ? "Creating Account..." : "Create Account"}
                      </Button>
                    </form>
                    
                    <div className="relative my-6">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-gray-200" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-2 text-gray-500">Or sign up with</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <Button onClick={() => handleOAuth("google")} variant="outline" disabled={isLoading}>
                        <FaGoogle className="mr-2 text-red-500" /> Google
                      </Button>
                      <Button onClick={() => handleOAuth("facebook")} variant="outline" disabled={isLoading}>
                        <FaFacebook className="mr-2 text-blue-600" /> Facebook
                      </Button>
                    </div>
                    
                    <p className="mt-4 text-center text-sm">
                      Already have an account?{" "}
                      <button onClick={() => signIn()} className="text-indigo-600 hover:underline">
                        Sign in
                      </button>
                    </p>
                    
                    <div className="text-center text-xs text-gray-500">
                      By signing up, you agree to our{" "}
                      <button className="text-blue-600 hover:underline">Terms of Service</button>{" "}
                      and{" "}
                      <button className="text-blue-600 hover:underline">Privacy Policy</button>
                    </div>
                  {/* </TabsContent> */}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
