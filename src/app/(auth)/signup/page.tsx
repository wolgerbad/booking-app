import { getSession } from '@/lib/session';
import SignupForm from './signup-form';
import { redirect } from 'next/navigation';

export default async function SignupPage() {
  const session = await getSession();

  if (session) redirect('/');

  return (
    <div className="mt-6 flex items-center justify-center bg-transparent px-4 py-12sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-yellow-600">
            Create your account
          </h1>
          <p className="mt-2 text-sm text-gray-400">
            Get started by creating a new account.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-700 bg-transparent p-8 shadow-sm">
          <SignupForm />
        </div>
      </div>
    </div>
  );
}
