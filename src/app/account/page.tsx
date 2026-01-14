import { getSession } from '@/lib/session';
import { redirect } from 'next/navigation';

export default async function Page() {
  const session = await getSession();
  if (session?.error) redirect('/login');

  return (
    <div>
      <h3 className="text-3xl text-yellow-500 font-semibold">
        Welcome, <span className="capitalize">{session.name}</span>
      </h3>
    </div>
  );
}
