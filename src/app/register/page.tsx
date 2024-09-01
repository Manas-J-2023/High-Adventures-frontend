import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const metadata = {
  title: "Sign Up",
  description: "Sign up to create an account on Foody",
};

export default function LoginForm() {
  return (
    <div
      className="flex items-center justify-center min-h-[calc(100vh-4rem-1px)] relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url("https://img.freepik.com/free-photo/view-nature-landscape-with-forest_23-2150763618.jpg?t=st=1725196836~exp=1725200436~hmac=bf549c0859257d08c4fa50e32396ddbcb8a81fb6cbce69d421f7c4a2d076a620&w=1380")`,
      }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <Card className="mx-auto max-w-sm relative z-5 backdrop-blur-md bg-opacity-90 bg-transparent">
        <CardHeader>
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <CardDescription className="text-gray-800">
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" placeholder="Max" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" placeholder="Robinson" required />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
            <Button type="submit" className="w-full">
              Create an account
            </Button>
            <Button variant="outline" className="w-full">
              Sign up with GitHub
            </Button>
          </div>
          <div className="mt-4 text-center text-sm text-white">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
