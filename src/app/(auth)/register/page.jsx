import RegisterForm from "@/components/form/RegisterForm";
import Image from "next/image";


export default function RegisterPage() {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
    <div className="flex items-center justify-center">
      <div className="mx-auto grid w-[350px] gap-6">
        <RegisterForm />
    </div>
    </div>
    <div className="hidden bg-muted lg:flex items-center justify-center">
    <Image
          src="/images/login.svg"
          alt="Image"
          width="600"
          height="600"
          className="object-contain bg-blend-lighten"
        />
    </div>
  </div>
  )
}