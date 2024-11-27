import {
  UserDashboard,
  RoleDashboard
  // GroupDashboard
} from '@/components/pages';

const UserPage = async ({ params }: { params: Promise<{ route: string }> }) => {
  const slug = (await params).route;
  return (
    <div className="w-full rounded-xl p-7">
      {slug === 'users' && <UserDashboard />}
      {slug === 'roles' && <RoleDashboard />}
      {/* {slug === 'groups' && <GroupDashboard />} */}
    </div>
  );
};

export default UserPage;
