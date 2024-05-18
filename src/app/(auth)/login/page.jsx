import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import LoginForm from '@/components/form/LoginForm';

export default function Home() {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center max-w-sm w-full mx-auto">
       <LoginForm />
      </div>
      <div className="hidden bg-muted lg:flex justify-center items-center">
        <Image
          src="/images/login.svg"
          alt="Image"
          width="600"
          height="600"
          className="object-contain bg-blend-lighten"
        />
      </div>
    </div>
  );
}
