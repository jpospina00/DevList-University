import HeaderDashboard from "../components/HeaderDashboard"
import { Outlet } from "react-router-dom"

export default function MainDashboard() {
    return (
        <>
            <HeaderDashboard />
            <Outlet />
        </>
    )
}