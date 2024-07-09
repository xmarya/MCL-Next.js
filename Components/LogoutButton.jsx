import { logout } from "@/API/actionsAuth";

export default function LogoutButton() {
    return (
        <form action={logout}>
            <button className="py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 w-full">
                {/* <ArrowRightOnRectangleIcon className="h-5 w-5 text-primary-600" /> */}
                <span>Logout</span>
            </button>
        </form>
    )
}

