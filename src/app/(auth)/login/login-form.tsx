'use client';

import Link from 'next/link';
import { useActionState } from 'react';
import { login } from '../actions';

const initialState = {
  error: null
};

export default function LoginForm() {
  const [state, action, pending] = useActionState(login, initialState);

  return (
    <form action={action} className="w-full space-y-6">
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-white">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-gray-700 bg-transparent px-4 py-3 text-md text-yellow-600 placeholder-gray-200 transition-colors focus:border-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-0"
          placeholder="Enter your email"
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-white"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="w-full rounded-lg border border-gray-700 bg-transparent px-4 py-3 text-md text-yellow-600 placeholder-gray-200 transition-colors focus:border-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-0"
          placeholder="Enter your password"
        />
      </div>
      {state?.error && <p className="text-red-600">{state.error}</p>}
      <button
        type="submit"
        disabled={pending}
        className="w-full cursor-pointer rounded-lg bg-yellow-600 px-6 py-4 text-sm font-medium text-gray-800 transition-colors hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 "
      >
        Sign In
      </button>

      <div className="flex justify-between text-gray-200">
        <p>Don&apos;t have an account?</p>
        <Link href="/signup" prefetch className="underline">
          Sign up
        </Link>
      </div>
    </form>
  );
}
