import HeaderDashboard from "../components/HeaderDashboard"
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"


export default function MainDashboard() {
    return (
        <div className="w-full h-screen">
            <HeaderDashboard />
            <Outlet />
            <Footer />
        </div>
    )
}