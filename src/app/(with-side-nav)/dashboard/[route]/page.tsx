import RoleDashboard from '@/components/pages/roleDashboard';
import UserDashboard from '@/components/pages/userDashboard';

const UserPage = async ({ params }: { params: Promise<{ route: string }> }) => {
  const slug = (await params).route;
  return (
    <div className="w-full rounded-xl p-7">
      {slug === 'users' && <UserDashboard />}
      {slug === 'roles' && <RoleDashboard />}
      {slug === 'groups' && <div>Groups</div>}
    </div>
  );
};

export default UserPage;
