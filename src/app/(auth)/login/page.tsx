import { getSession } from '@/lib/session';
import LoginForm from './login-form';
import { redirect } from 'next/navigation';

export default async function LoginPage() {
  const session = await getSession();
  if (!session?.error) redirect('/');
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 py-12 dark:bg-black sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Sign in to your account
          </h1>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Welcome back! Please enter your details.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
