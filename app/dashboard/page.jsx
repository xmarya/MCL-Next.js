import { myDashboard } from "@/API/apiAuth"

export default async function Dashboard() {
    const user = await myDashboard();
    console.log("userDashboard =>", user);
    return (
        <div>
            <h2>Your Dashboard</h2>
        </div>
    )
}

