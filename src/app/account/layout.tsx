import Sidebar from './sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-12 grid grid-cols-5 flex-1">
      <div className="col-start-1 cols-span-1 h-full">
        <Sidebar />
      </div>
      <div className="col-start-2 col-span-full px-8">{children}</div>
    </div>
  );
}
