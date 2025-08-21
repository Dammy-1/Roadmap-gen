"use client";
import { SessionProvider } from "next-auth/react";

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}

//Landing 1
// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Sparkles, ChevronRight, Eye, EyeOff, Mail, Lock, User } from "lucide-react";
// import { FaGoogle, FaFacebook } from "react-icons/fa";
// import { useRouter } from "next/navigation";
// import { useAuth } from "@/contexts/AuthContext";

// export default function Landing() {
//   const [activeTab, setActiveTab] = useState("signin");
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     confirmPassword: "",
//     name: "",
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const router = useRouter();
//   const { login, signup, loginWithGoogle, loginWithFacebook } = useAuth();

//   const handleInputChange = (field: string, value: string) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   const handleSignIn = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError(null);

//     try {
//       await login(formData.email, formData.password);
//       router.push("/");
//     } catch (err: any) {
//       setError(err.message || "Login failed");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleSignUp = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError(null);

//     if (formData.password !== formData.confirmPassword) {
//       setError("Passwords do not match!");
//       setIsLoading(false);
//       return;
//     }

//     try {
//       await signup(formData.email, formData.password, formData.name);
//       router.push("/");
//     } catch (err: any) {
//       setError(err.message || "Signup failed");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleGoogleAuth = async () => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       await loginWithGoogle();
//       router.push("/");
//     } catch (err: any) {
//       setError(err.message || "Google login failed");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleFacebookAuth = async () => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       await loginWithFacebook();
//       router.push("/");
//     } catch (err: any) {
//       setError(err.message || "Facebook login failed");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-cool">
//       <div className="container mx-auto px-4 min-h-screen flex items-center">
//         <div className="grid lg:grid-cols-2 items-center">
//           {/* Left Side - Hero */}
//           <div className="space-y-8 pl-16">
//             <div className="space-y-6">
//               <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-4 py-2">
//                 <Sparkles className="h-4 w-4 text-blue-600" />
//                 <span className="text-sm font-medium text-[#5964FC]">AI-Powered Learning Platform</span>
//               </div>

//               <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
//                 Master Any Skill with
//                 <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                   Personalized Roadmaps
//                 </span>
//               </h1>

//               <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
//                 Transform your learning journey with AI-generated roadmaps that adapt to your pace, schedule, and goals.
//               </p>
//             </div>

//             <Button
//               size="lg"
//               className="bg-gradient-to-r from-[#5964FC] to-[#9134EA] hover:from-[#4f5df3] hover:to-[#882be1] text-xl transition-all duration-200 rounded-3xl px-8 py-9"
//               onClick={() => setActiveTab("signup")}
//             >
//               Start Learning Today
//               <ChevronRight className="h-4 w-4" />
//             </Button>
//           </div>

//           {/* Right Side - Auth Forms */}
//           <div className="flex justify-center">
//             <Card className="card-modern w-full max-w-md">
//               <CardHeader className="text-center pb-4">
//                 <CardTitle className="text-2xl">Welcome to RoadmapAI</CardTitle>
//                 <CardDescription>Join thousands of learners achieving their goals</CardDescription>
//               </CardHeader>

//               <CardContent>
//                 <Tabs value={activeTab} onValueChange={setActiveTab}>
//                   <TabsList className="grid w-full grid-cols-2 rounded-xl">
//                     <TabsTrigger value="signin" className="rounded-lg">
//                       Sign In
//                     </TabsTrigger>
//                     <TabsTrigger value="signup" className="rounded-lg">
//                       Sign Up
//                     </TabsTrigger>
//                   </TabsList>

//                   {/* Sign In */}
//                   <TabsContent value="signin" className="space-y-4 mt-6">
//                     {error && <p className="text-red-500 text-sm">{error}</p>}
//                     <form onSubmit={handleSignIn} className="space-y-4">
//                       <InputField
//                         icon={Mail}
//                         placeholder="Enter your email"
//                         value={formData.email}
//                         onChange={(val) => handleInputChange("email", val)}
//                         type="email"
//                       />
//                       <InputField
//                         icon={Lock}
//                         placeholder="Enter your password"
//                         value={formData.password}
//                         onChange={(val) => handleInputChange("password", val)}
//                         type={showPassword ? "text" : "password"}
//                         showToggle={true}
//                         showPassword={showPassword}
//                         setShowPassword={setShowPassword}
//                       />
//                       <Button type="submit" className="w-full py-3 bg-gradient-to-r from-[#5964FC] to-[#9134EA]" disabled={isLoading}>
//                         {isLoading ? "Signing In..." : "Sign In"}
//                       </Button>
//                     </form>
//                   </TabsContent>

//                   {/* Sign Up */}
//                   <TabsContent value="signup" className="space-y-4 mt-6">
//                     {error && <p className="text-red-500 text-sm">{error}</p>}
//                     <form onSubmit={handleSignUp} className="space-y-4">
//                       <InputField
//                         icon={User}
//                         placeholder="Full Name"
//                         value={formData.name}
//                         onChange={(val) => handleInputChange("name", val)}
//                         type="text"
//                       />
//                       <InputField
//                         icon={Mail}
//                         placeholder="Email"
//                         value={formData.email}
//                         onChange={(val) => handleInputChange("email", val)}
//                         type="email"
//                       />
//                       <InputField
//                         icon={Lock}
//                         placeholder="Password"
//                         value={formData.password}
//                         onChange={(val) => handleInputChange("password", val)}
//                         type={showPassword ? "text" : "password"}
//                         showToggle={true}
//                         showPassword={showPassword}
//                         setShowPassword={setShowPassword}
//                       />
//                       <InputField
//                         icon={Lock}
//                         placeholder="Confirm Password"
//                         value={formData.confirmPassword}
//                         onChange={(val) => handleInputChange("confirmPassword", val)}
//                         type={showPassword ? "text" : "password"}
//                         showToggle={true}
//                         showPassword={showPassword}
//                         setShowPassword={setShowPassword}
//                       />

//                       <Button type="submit" className="w-full py-3 bg-gradient-to-r from-[#5964FC] to-[#9134EA]" disabled={isLoading}>
//                         {isLoading ? "Creating Account..." : "Create Account"}
//                       </Button>
//                     </form>

//                     {/* Social Login */}
//                     <div className="grid grid-cols-2 gap-3 mt-4">
//                       <Button type="button" variant="outline" onClick={handleGoogleAuth} disabled={isLoading}>
//                         <FaGoogle className="h-4 w-4 text-red-500 mr-2" /> Google
//                       </Button>
//                       <Button type="button" variant="outline" onClick={handleFacebookAuth} disabled={isLoading}>
//                         <FaFacebook className="h-4 w-4 text-blue-600 mr-2" /> Facebook
//                       </Button>
//                     </div>
//                   </TabsContent>
//                 </Tabs>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Reusable Input Field Component
// interface InputFieldProps {
//   icon: any;
//   placeholder: string;
//   value: string;
//   onChange: (val: string) => void;
//   type: string;
//   showToggle?: boolean;
//   showPassword?: boolean;
//   setShowPassword?: (val: boolean) => void;
// }

// function InputField({ icon: Icon, placeholder, value, onChange, type, showToggle, showPassword, setShowPassword }: InputFieldProps) {
//   return (
//     <div className="space-y-2">
//       <div className="relative">
//         <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
//         <Input type={type} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} className="pl-10 pr-10 rounded-xl border-blue-200" required />
//         {showToggle && setShowPassword && (
//           <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2">
//             {showPassword ? <EyeOff className="h-4 w-4 text-gray-400" /> : <Eye className="h-4 w-4 text-gray-400" />}
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }


// Landing 2
// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { signIn } from "next-auth/react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
// import { FaGoogle, FaFacebook } from "react-icons/fa";

// export default function SignupPage() {
//   const router = useRouter();
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const handleInputChange = (field: string, value: string) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   const handleSignUp = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError(null);

//     if (formData.password !== formData.confirmPassword) {
//       setError("Passwords do not match!");
//       return;
//     }

//     setIsLoading(true);

//     try {
//       // Using NextAuth credentials provider
//       const res = await signIn("credentials", {
//         redirect: false,
//         name: formData.name,
//         email: formData.email,
//         password: formData.password,
//       });

//       if (res?.error) {
//         setError(res.error);
//       } else {
//         router.push("/dashboard");
//       }
//     } catch (err) {
//       console.error(err);
//       setError("Signup failed. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

  // const handleOAuth = async (provider: "google" | "facebook") => {
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     await signIn(provider, { callbackUrl: "/dashboard" });
  //   } catch (err) {
  //     console.error(err);
  //     setError(`${provider} login failed.`);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 p-4">
//       <Card className="w-full max-w-md">
//         <CardHeader className="text-center pb-4">
//           <CardTitle className="text-2xl">Create Your Account</CardTitle>
//           <CardDescription>Join thousands of learners achieving their goals</CardDescription>
//         </CardHeader>
//         <CardContent className="space-y-4">
//           {error && <p className="text-red-500 text-sm">{error}</p>}

//           <form onSubmit={handleSignUp} className="space-y-4">
//             {/* Full Name */}
//             <div className="relative">
//               <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
//               <Input
//                 type="text"
//                 placeholder="Full Name"
//                 value={formData.name}
//                 onChange={(e) => handleInputChange("name", e.target.value)}
//                 className="pl-10 rounded-xl"
//                 required
//               />
//             </div>

//             {/* Email */}
//             <div className="relative">
//               <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
//               <Input
//                 type="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={(e) => handleInputChange("email", e.target.value)}
//                 className="pl-10 rounded-xl"
//                 required
//               />
//             </div>

//             {/* Password */}
//             <div className="relative">
//               <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
//               <Input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={(e) => handleInputChange("password", e.target.value)}
//                 className="pl-10 pr-10 rounded-xl"
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-1/2 -translate-y-1/2"
//               >
//                 {showPassword ? <EyeOff className="h-4 w-4 text-gray-400" /> : <Eye className="h-4 w-4 text-gray-400" />}
//               </button>
//             </div>

//             {/* Confirm Password */}
//             <div className="relative">
//               <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
//               <Input
//                 type="password"
//                 placeholder="Confirm Password"
//                 value={formData.confirmPassword}
//                 onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
//                 className="pl-10 rounded-xl"
//                 required
//               />
//             </div>

//             <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600" disabled={isLoading}>
//               {isLoading ? "Creating Account..." : "Create Account"}
//             </Button>
//           </form>

//           <div className="relative my-4 text-center text-sm text-gray-500">
//             <span className="bg-white px-2">Or sign up with</span>
//           </div>

//           <div className="grid grid-cols-2 gap-3">
//             <Button onClick={() => handleOAuth("google")} variant="outline" disabled={isLoading}>
//               <FaGoogle className="mr-2 text-red-500" /> Google
//             </Button>
//             <Button onClick={() => handleOAuth("facebook")} variant="outline" disabled={isLoading}>
//               <FaFacebook className="mr-2 text-blue-600" /> Facebook
//             </Button>
//           </div>

//           <p className="mt-4 text-center text-sm">
//             Already have an account?{" "}
//             <button onClick={() => signIn()} className="text-indigo-600 hover:underline">
//               Sign in
//             </button>
//           </p>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
