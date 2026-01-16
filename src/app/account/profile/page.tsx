import { getSession } from '@/lib/session';
import ProfileForm from './profile-form';

export default async function Page() {
  const user = await getSession();
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
