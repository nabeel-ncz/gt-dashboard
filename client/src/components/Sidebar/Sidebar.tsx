import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { FaUser, FaUserPlus } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { CgInsights } from "react-icons/cg";
import { LuPlusCircle } from "react-icons/lu";
import { IoMdSettings } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import { NavLink } from "react-router-dom";

export default function Sidebar({
    open,
    toggleSidebar
}: {
    open: boolean,
    toggleSidebar: () => void;
}) {

    return (
        <div className={`w-full h-screen sticky bg-[#000] pt-4 pl-4 transition-all ease-in-out xl:block ${open ? 'block z-10 bg-[rgba(0,0,0,0.7)] backdrop-blur-lg px-6' : 'hidden'}`}>
            <div className="flex items-center justify-between gap-4">
                <img src="/ginger-logo.png" alt="" className="h-14" />
                {open && (
                    <IoIosArrowDropleft onClick={toggleSidebar} color={"#fff"} size={"24"} className="cursor-pointer" />
                )}
            </div>
            <div className="flex flex-col items-start pt-8">
                <h2 className="font-medium text-xs text-[rgba(255,255,255,0.6)] uppercase">Main</h2>
                <div className="flex flex-col items-start pt-4">
                    <NavLink to='/' className={({ isActive }) => isActive ? "opacity-100" : "opacity-80"}>
                        <div className="flex items-center justify-start gap-2 cursor-pointer">
                            <AiFillHome size={"22"} color={"#fff"} />
                            <h2 className="font-normal text-sm text-white">Dashboard</h2>
                        </div>
                    </NavLink>
                </div>
            </div>

            <div className="flex flex-col items-start pt-8">
                <h2 className="font-medium text-xs text-[rgba(255,255,255,0.6)] uppercase">Manage</h2>
                <div className="flex flex-col items-start pt-4 gap-8">
                    <NavLink to='/inbox' className={({ isActive }) => isActive ? "opacity-100" : "opacity-50 hover:opacity-100"}>
                        <div className="flex items-center justify-start gap-2 cursor-pointer">
                            <AiFillMessage size={"22"} color={"#fff"} />
                            <h2 className="font-normal text-sm text-white">Inbox</h2>
                        </div>
                    </NavLink>
                    <NavLink to='/channels' className={({ isActive }) => isActive ? "opacity-100" : "opacity-50 hover:opacity-100"}>
                        <div className="flex items-center justify-start gap-2 cursor-pointer">
                            <MdDashboard size={"22"} color={"#fff"} />
                            <h2 className="font-normal text-sm text-white">Channels</h2>
                        </div>
                    </NavLink>
                    <NavLink to='/profiles' className={({ isActive }) => isActive ? "opacity-100" : "opacity-50 hover:opacity-100"}>
                        <div className="flex items-center justify-start gap-2 cursor-pointer">
                            <FaUser size={"22"} color={"#fff"} />
                            <h2 className="font-normal text-sm text-white">Buissness Profiles</h2>
                        </div>
                    </NavLink>
                    <NavLink to='/insights' className={({ isActive }) => isActive ? "opacity-100" : "opacity-50 hover:opacity-100"}>
                        <div className="flex items-center justify-start gap-2 cursor-pointer">
                            <CgInsights size={"22"} color={"#fff"} />
                            <h2 className="font-normal text-sm text-white">Insights</h2>
                        </div>
                    </NavLink>
                </div>
            </div>
            <div className="flex flex-col items-start pt-8">
                <h2 className="font-medium text-xs text-[rgba(255,255,255,0.6)] uppercase">Settings</h2>
                <div className="flex flex-col items-start pt-4 gap-8">
                    <NavLink to='/roles' className={({ isActive }) => isActive ? "opacity-100" : "opacity-50 hover:opacity-100"}>
                        <div className="flex items-center justify-start gap-2 cursor-pointer">
                            <LuPlusCircle size={"22"} color={"#fff"} />
                            <h2 className="font-normal text-sm text-white">Create Roles</h2>
                        </div>
                    </NavLink>
                    <NavLink to='/users' className={({ isActive }) => isActive ? "opacity-100" : "opacity-50 hover:opacity-100"}>
                        <div className="flex items-center justify-start gap-2 cursor-pointer">
                            <FaUserPlus size={"22"} color={"#fff"} />
                            <h2 className="font-normal text-sm text-white">Create Users</h2>
                        </div>
                    </NavLink>
                    <NavLink to='/settings' className={({ isActive }) => isActive ? "opacity-100" : "opacity-50 hover:opacity-100"}>
                        <div className="flex items-center justify-start gap-2 cursor-pointer">
                            <IoMdSettings size={"22"} color={"#fff"} />
                            <h2 className="font-normal text-sm text-white">Settings</h2>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
