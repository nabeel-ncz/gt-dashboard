import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"
import Sidebar from "../components/Sidebar/Sidebar"
import Footer from "../components/Footer/Footer"
import { useState } from "react"

export default function Layout() {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <>
            <div className="w-full flex bg-black">
                <div className={`xl:w-2/12 ${open ? "fixed z-10 top-0" : ""}`}>
                    <Sidebar
                        open={open}
                        toggleSidebar={() => { setOpen((state) => !state) }}
                    />
                </div>
                <div className="w-full xl:w-10/12" style={{ background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(226,153,44,0.5) 55%, rgba(24,123,163,0.7) 100%)" }}>
                    <Header
                        openSidebar={() => { setOpen((state) => !state) }}
                    />
                    <Outlet />
                    <Footer />
                </div>
            </div>

        </>
    )
}

