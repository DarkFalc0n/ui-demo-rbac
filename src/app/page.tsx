import { redirect } from 'next/navigation';
const Home = () => {
  redirect(`/dashboard/users`);
  return <div>Dashboard</div>;
};

export default Home;
