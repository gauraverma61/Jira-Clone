import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
  } from "@/components/ui/card";
  import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
  } from "@/components/ui/form";
  import DottedSeparator from "@/components/dotted-seperator";
  import { Input } from "@/components/ui/input";
  import { Button } from "@/components/ui/button";
  import { FcGoogle } from "react-icons/fc";
  import { FaGithub } from "react-icons/fa";
  import Link from "next/link";
  import { useForm } from "react-hook-form";
  import { z } from "zod";
  import { zodResolver } from "@hookform/resolvers/zod";
import { useRegister } from "../api/use-register";
  
  const SignUpSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(8).max(256),
  });
  
  export const SignUpCard = () => {
    const form = useForm<z.infer<typeof SignUpSchema>>({
      resolver: zodResolver(SignUpSchema),
      defaultValues: {
        name: "",
        email: "",
        password: "",
      },
    });

    const {mutate} = useRegister();
  
    const onSubmit = (values: z.infer<typeof SignUpSchema>) => {
      mutate(values)
    };
  
    return (
      <Card className="w-full h-full md:w-[487px] border-none shadow-none">
        <CardHeader className="flex flex-col items-center justify-center text-center p-7">
          <CardTitle className="text-2xl">Sign Up</CardTitle>
          <CardDescription>
            By signing up, you agree to our{" "}
            <Link href={"/privacy"}>
              <span className="text-blue-700">Privacy Policy</span>
            </Link>{" "}
            and{" "}
            <Link href={"/terms"}>
              <span className="text-blue-700">Terms of Service</span>
            </Link>
          </CardDescription>
        </CardHeader>
        <div className="px-7">
          <DottedSeparator />
        </div>
        <CardContent className="p-7">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} type="text" placeholder="Enter your name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} type="email" placeholder="Enter your email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} type="password" placeholder="Enter your password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="w-full">
                Sign Up
              </Button>
            </form>
          </Form>
        </CardContent>
        <div className="px-7">
          <DottedSeparator />
        </div>
        <CardContent className="p-7 flex flex-col gap-y-4">
          <Button variant="secondary" size="lg" className="w-full">
            <FcGoogle className="mr-2 size-5" />
            Sign Up with Google
          </Button>
          <Button variant="secondary" size="lg" className="w-full">
            <FaGithub className="mr-2 size-5" />
            Sign Up with Github
          </Button>
        </CardContent>
        <div className=" px-7">
        <DottedSeparator />
      </div>
      <CardContent className="p-7 flex items-center justify-center">
        <p>Already have an account?</p>
        <Link href="/sign-in">
          <span className="text-blue-700">&nbsp;Sign In</span>
        </Link>
      </CardContent>
      </Card>
    );
  };
  