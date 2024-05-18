'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { signupSchema } from '@/schema/formValidations';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';

function RegisterForm() {
  const { handleSubmit, ...form } = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values) => {
    console.log(values);

    try {
      // handle signup with name addition
      const { email, password, name } = values; // Destructure name from values
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <header className="text-3xl font-semibold">Sign Up</header>
        <div className="inputs__container mt-4 grid grid-cols-1 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Your name</FormLabel>
                  <FormControl>
                    <Input placeholder="John doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

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
          Create account
        </Button>

        <Link href="/login" className="opacity-80 text-center mt-6 block">
          Already have an account?
          <span className="opacity-100 underline"> Sign In</span>
        </Link>
      </form>
    </Form>
  );
}

export default RegisterForm;
