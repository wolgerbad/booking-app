import MobileSidebar from './mobile-sidebar';
import Sidebar from './sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative py-12 grid grid-cols-5 flex-1">
      <div className="hidden lg:block lg:col-start-1 col-span-1 h-full ">
        <Sidebar />
      </div>
      <div className="col-start-1 lg:col-start-2 col-span-full px-8">{children}</div>
    </div>
  );
}
