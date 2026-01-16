import { getSession, getUser } from '@/lib/session';
import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Aurora - My Account',
};

export default async function Page() {
  const session = await getSession();
  if (!session) redirect('/login');

  const user = await getUser(session.payload.userId);

  return (
    <div>
      <h3 className="text-3xl text-yellow-500 font-semibold">
        Welcome, <span className="capitalize">{user.name}</span>
      </h3>
    </div>
  );
}
