import { Outlet } from "react-router-dom"
import Siderbar from "../components/Siderbar"


export default function MainInventory() {
    return (
        <div className="flex w-full">
            <Siderbar />
            <Outlet />
        </div>
    )
}