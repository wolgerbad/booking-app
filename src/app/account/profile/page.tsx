import { getSession, getUser } from '@/lib/session';
import ProfileForm from './profile-form';

export const metadata = {
  title: 'Aurora - Update Profile',
};

export default async function Page() {
  const session = await getSession();
  if (!session) return;

  const user = await getUser(session.payload.userId);

  return (
    <div className="text-slate-300">
      <h3 className="text-yellow-600 font-semibold mb-3 text-3xl">
        Update your guest profile
      </h3>
      <p className="text-slate-300 mb-5 text-lg">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>
      <ProfileForm user={user} />
    </div>
  );
}
