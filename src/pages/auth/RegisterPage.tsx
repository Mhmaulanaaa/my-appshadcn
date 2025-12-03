import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full max-w-xl bg-zinc-900 border border-zinc-800 text-white shadow-2xl rounded-2xl">
          <CardHeader className="text-center space-y-1 pb-2">
            <CardTitle className="text-3xl font-semibold">
              Create Account
            </CardTitle>
            <p className="text-zinc-400 text-sm">
              Fill in your details to get started
            </p>
          </CardHeader>

          <CardContent>
            <form className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-zinc-300">
                  Full Name
                </Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  className="bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-zinc-300">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@mail.com"
                  className="bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500"
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-zinc-300">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="********"
                  className="bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500"
                />
              </div>

              {/* Button */}
              <Button className="w-full bg-white text-black font-semibold hover:bg-zinc-200 transition shadow-lg">
                Register
              </Button>

              <p className="text-sm text-center text-zinc-400 pt-2">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-white hover:underline font-medium"
                >
                  Login
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
