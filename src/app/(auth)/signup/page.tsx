"use client";

import { authClient } from "@/src/lib/auth-client"; //import the auth client

import { Button } from "@/src/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form";
import { Input } from "@/src/components/ui/input";
import { Separator } from "@/src/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  name: z.string().min(1, "Name require"),
  email: z.string().email("Required valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

const SignUp01Page = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (form: z.infer<typeof formSchema>) => {
    await authClient.signUp.email({
        name: form.name,
        email: form.email, // user email address
        password: form.password, // user password -> min 6 characters by default
    }, {
        onRequest: (ctx) => {
            //show loading
            console.log(ctx.body);
        },
        onSuccess: () => {
            alert("Success! Direct to home page")
            router.replace("/");
        },
        onError: (ctx) => {
            // display the error message
            alert(ctx.error.message);
        },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-xs w-full flex flex-col items-center">
        <p className="mt-4 text-xl font-bold tracking-tight">
          Sign Up to Shadcn UI Blocks
        </p>
        <div className="my-7 w-full flex items-center justify-center overflow-hidden">
          <Separator />
          {/* <span className="text-sm px-2">OR</span> */}
          <Separator />
        </div>

        <Form {...form}>
          <form
            className="w-full space-y-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Your Name"
                      className="w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Email"
                      className="w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Password"
                      className="w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="mt-4 w-full">
              Login
            </Button>
          </form>
        </Form>

        <div className="mt-5 space-y-5">
          {/* <Link
            href="#"
            className="text-sm block underline text-muted-foreground text-center"
          >
            Forgot your password?
          </Link> */}
          <p className="text-sm text-center">
            Already have an account?
            <Link href="/login" className="ml-1 underline text-muted-foreground">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp01Page;
