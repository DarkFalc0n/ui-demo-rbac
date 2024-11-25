import SideNav from '@/components/molecules/sideNav';

export default function SideNavLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-full gap-4">
      <SideNav />
      <div className="overflow-y-auto rounded-xl">{children}</div>
    </div>
  );
}
