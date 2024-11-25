import UserDashboard from '@/components/pages/userDashboard';

const UserPage = async ({ params }: { params: Promise<{ route: string }> }) => {
  const slug = (await params).route;
  return (
    <div className="w-full rounded-xl bg-zinc-100 p-7 shadow-xl">
      {slug === 'users' && <UserDashboard />}
      {slug === 'roles' && <div>Roles</div>}
      {slug === 'groups' && <div>Groups</div>}
    </div>
  );
};

export default UserPage;
