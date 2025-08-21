"use client";

import { useState } from "react";
import { signIn } from "next-auth/react"; // ✅ Import NextAuth
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignInDialog() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

const handleSignIn = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);
  setError(null);

  try {
    const res = await signIn("credentials", {
      redirect: false, // we handle redirect manually
      email: formData.email,
      password: formData.password,
      callbackUrl: "/dashboard",
    });

    console.log("NextAuth signIn response:", res); // debug

    if (!res) {
      setError("Unexpected error. Please try again.");
      return;
    }

    if (res.error) {
      setError("Invalid email or password.");
    } else {
      // Successful login → redirect to dashboard
      window.location.href = res.url || "/dashboard";
    }
  } catch (err) {
    console.error("SignIn error:", err);
    setError("Something went wrong. Please try again.");
  } finally {
    setIsLoading(false);
  }
};


  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost">Sign In</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-center">Sign In</DialogTitle>
        </DialogHeader>

        {/* ✅ Form */}
        <form onSubmit={handleSignIn} className="space-y-4 mt-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
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
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
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
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-gray-400" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-[#5964FC] to-[#9134EA] hover:from-[#4f5df3] hover:to-[#882be1] rounded-xl py-3"
            disabled={isLoading}
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </Button>
        </form>

        <div className="text-center mt-2">
          <button className="text-sm text-blue-600 hover:underline">
            Forgot your password?
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
