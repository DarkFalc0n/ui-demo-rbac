import { redirect } from 'next/navigation';
const Dashboard = () => {
  redirect(`/dashboard/users`);
  return <div>Dashboard</div>;
};

export default Dashboard;
