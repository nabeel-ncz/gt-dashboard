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
                <div className="relative w-full xl:w-10/12 bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/dash-bg-3.webp')"}}>
                    <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)]"></div>
                    <div className="relative z-10">

                        <Header
                            openSidebar={() => { setOpen((state) => !state) }}
                        />
                        <Outlet />
                        <Footer />
                    </div>
                </div>
            </div>

        </>
    )
}

