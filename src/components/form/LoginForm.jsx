'use client';
import { loginSchema } from '@/schema/formValidations';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';

function LoginForm() {
  const { handleSubmit, ...form } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values) => {
    console.log(values);
    
    const { email, password } = values;

    try {
      // handle login here

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div>
          <header className="text-3xl font-semibold">Login</header>
          <p>login description here</p>
        </div>
        <div className="inputs__container mt-4 grid grid-cols-1 gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Email Address" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        </div>
        <Button type="submit" className="mt-8 w-full">
          Login
        </Button>

        <Link href="/register" className="opacity-80 text-center mt-6 block">
          Don&apos;t have an account?
          <span className="opacity-100 underline"> Sign Up</span>
        </Link>
      </form>
    </Form>
  );
}

export default LoginForm;
