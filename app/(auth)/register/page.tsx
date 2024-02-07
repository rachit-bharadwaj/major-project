import Image from "next/image";
import { Form } from "@/components/register";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <Image
        src="/images/auth-ui.png"
        alt="auth ui image"
        width={500}
        height={500}
        className="h-44 w-fit"
      />

      <h1 className="text-5xl font-extrabold w-full px-3">Register</h1>

      <Form />

      <p>
        Already have an account?&nbsp;
        <Link href="/login" className="text-blue-500">
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
