import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Lock } from "lucide-react";
import { motion } from "framer-motion";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-black p-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full max-w-xl bg-zinc-900 text-white shadow-2xl border border-zinc-800 rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-center text-3xl font-semibold">
              Welcome Back 👋
            </CardTitle>
            <p className="text-center text-zinc-400 text-sm">
              Sign in to your account
            </p>
          </CardHeader>

          <CardContent>
            <form className="space-y-6 mt-4">
              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm text-zinc-400">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-zinc-500" />
                  <Input
                    placeholder="Enter your email"
                    className="pl-10 bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="text-sm text-zinc-400">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-zinc-500" />
                  <Input
                    placeholder="Enter your password"
                    type="password"
                    className="pl-10 bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500"
                  />
                </div>
              </div>

              <div className="text-right">
                <a
                  href="#"
                  className="text-zinc-400 text-sm hover:text-white transition"
                >
                  Forgot password?
                </a>
              </div>

              {/* Button */}
              <Button className="w-full bg-white text-black font-semibold hover:bg-zinc-200 transition shadow-lg">
                Sign In
              </Button>

              <p className="text-center text-zinc-500 text-sm">
                Don’t have an account?{" "}
                <a
                  href="/register"
                  className="font-semibold text-white hover:underline"
                >
                  Create one
                </a>
              </p>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
