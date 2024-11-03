import { Outlet } from "react-router-dom"
import Siderbar from "../components/Siderbar"


export default function MainInventory() {
    return (
        <div className="flex w-full h-[100%] items-end">
            <Siderbar />
            <Outlet />
        </div>
    )
}