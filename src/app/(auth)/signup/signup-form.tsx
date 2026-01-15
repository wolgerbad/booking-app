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
        <label htmlFor="name" className="block text-sm font-medium text-white">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          className="w-full rounded-lg border border-gray-700 bg-transparent px-4 py-3 text-md text-yellow-600 placeholder-gray-200 transition-colors focus:border-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-0"
          placeholder="Enter your name"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-white">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
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
          type="password"
          name="password"
          required
          className="w-full rounded-lg border border-gray-700 bg-transparent px-4 py-3 text-md text-yellow-600 placeholder-gray-200 transition-colors focus:border-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-0"
          placeholder="Create a password"
        />
      </div>
      {state?.error && <p className="text-red-600 ">{state.error}</p>}
      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-lg cursor-pointer bg-yellow-600 px-6 py-4 text-sm font-medium text-gray-800 transition-colors hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 "
      >
        Create Account
      </button>

      <div className="flex justify-between text-gray-200">
        <p>Already have an account?</p>
        <Link href="/login" className="underline">
          Sign in
        </Link>
      </div>
    </form>
  );
}
