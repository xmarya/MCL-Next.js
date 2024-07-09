import SideNavigation from "@/Components/Dashboard/SideNavigation";

export default function DashboardLayout({children}) {
    return (
        <div className="h-full grid grid-cols-[16rem_1fr] gap-12">
            <SideNavigation/>
            <div className="py-4">{children}</div>
        </div>
    )
}
