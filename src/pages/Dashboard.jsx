import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <div className="">
      <p className="text-5xl">
        WellCome to Dashboard{" "}
        <span className="font-semibold">{user.displayName}</span>
      </p>
      <p className="text-4xl mt-4">
        Email: <span>{user?.email}</span>
      </p>

      <p className="text-2xl mt-4">
        Manage the website content through Sidebar
      </p>
    </div>
  );
};

export default Dashboard;
