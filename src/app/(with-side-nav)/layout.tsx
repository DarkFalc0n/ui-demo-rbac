import SideNav from '@/components/molecules/sideNav';

export default function SideNavLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-full gap-4">
      <SideNav />
      <div className="h-full overflow-y-auto rounded-xl bg-zinc-100 shadow-xl">
        {children}
      </div>
    </div>
  );
}
