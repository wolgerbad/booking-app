import { getSession } from '@/lib/session';
import LoginForm from './login-form';
import { redirect } from 'next/navigation';

export default async function LoginPage() {
  const session = await getSession();
  if (session) redirect('/');
  return (
    <div className="mt-6 flex items-center justify-center  px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-yellow-600 ">
            Sign in to your account
          </h1>
          <p className="mt-2 text-sm text-gray-300">
            Welcome back! Please enter your details.
          </p>
        </div>
        <div className="border border-zinc-700 p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
