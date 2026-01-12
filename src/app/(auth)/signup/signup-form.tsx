'use client';

import Link from 'next/link';
import { useActionState } from 'react';
import { signup } from '../actions';

const initialState = {
  error: '',
};

export default function SignupForm() {
  const [state, action, pending] = useActionState(signup, initialState);

  return (
    <form action={action} className="w-full space-y-6">
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-zinc-900 dark:text-zinc-50"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-500 transition-colors focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-0 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder-zinc-400 dark:focus:border-zinc-600 dark:focus:ring-zinc-600"
          placeholder="Enter your name"
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-zinc-900 dark:text-zinc-50"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-500 transition-colors focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-0 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder-zinc-400 dark:focus:border-zinc-600 dark:focus:ring-zinc-600"
          placeholder="Enter your email"
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-zinc-900 dark:text-zinc-50"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          required
          className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-500 transition-colors focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-0 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder-zinc-400 dark:focus:border-zinc-600 dark:focus:ring-zinc-600"
          placeholder="Create a password"
        />
      </div>
      {state?.error && <p className="text-red-600 ">{state.error}</p>}
      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-lg bg-zinc-900 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 dark:focus:ring-zinc-400"
      >
        Create Account
      </button>

      <div className="flex justify-between">
        <p>Already have an account?</p>
        <Link href="/login" className="underline">
          Sign in
        </Link>
      </div>
    </form>
  );
}
