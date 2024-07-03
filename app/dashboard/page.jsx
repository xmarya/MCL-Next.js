import { myDashboard } from "@/API/actionsAuth";
import DashboardTable from "@/Components/Dashboard/DashboardTable";

export default async function Dashboard() {
  const user = await myDashboard();
  console.log("userDashboard =>", user);
  return (
    <div>
      <h2>Your Dashboard</h2>
      <DashboardTable user={user} />
    </div>
  );
}
