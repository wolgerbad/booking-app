'use client';

import { Button } from '@/components/ui/button';
import { updateProfile } from '@/lib/actions';
import { useFormStatus } from 'react-dom';

export default function ProfileForm({
  user,
}: {
  user: {
    hashed_password: null;
    id: number;
    name: string;
    email: string;
    profile_image: string | null;
    national_id: string | null;
  };
}) {
  return (
    <form
      action={updateProfile}
      className="bg-slate-800 text-lg px-8 py-6 flex flex-col gap-6"
    >
      <div>
        <label htmlFor="" className="block mb-2">
          Full Name
        </label>
        <input
          type="text"
          defaultValue={user.name}
          disabled
          name="name"
          className="w-full px-4 py-3 bg-gray-600 cursor-not-allowed text-slate-300"
        />
      </div>
      <div>
        <label htmlFor="" className="block mb-2">
          Email address
        </label>
        <input
          type="text"
          name="email"
          disabled
          defaultValue={user.email}
          className=" w-full px-4 py-3 bg-gray-600 cursor-not-allowed text-slate-300"
        />
      </div>
      <div>
        <label htmlFor="" className="block mb-2">
          National ID Number
        </label>
        <input
          type="number"
          name="id"
          defaultValue={user.national_id ?? ''}
          className=" w-full px-4 py-3 bg-slate-300 text-slate-700"
        />
      </div>
      <input type="hidden" name="userId" value={user.id} />
      <UpdateButton />
    </form>
  );
}

function UpdateButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      className={`${
        pending
          ? 'bg-yellow-700 cursor-not-allowed'
          : 'bg-yellow-600 hover:bg-yellow-700 cursor-pointer'
      } self-end text-slate-800 text-lg font-semibold px-8 py-7 `}
    >
      {pending ? 'Updating..' : 'Update profile'}
    </Button>
  );
}
