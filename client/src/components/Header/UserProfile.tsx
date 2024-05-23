import { FaUser } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";

export default function UserProfile({
    openSidebar
}:{
    openSidebar: () => void
}) {
    return (
        <>
            <div className="flex items-center justify-center gap-2">
                <div onClick={openSidebar} className="flex cursor-pointer xl:hidden items-center justify-center bg-slate-950 rounded-full p-2 border-2 border-red-700">
                    <IoMenu size={"16"} color={"#fff"} />
                </div>
                <div className="flex items-center justify-center bg-slate-950 rounded-full p-2 border-2 border-red-700">
                    <FaUser size={"16"} color={"#fff"} />
                </div>
                <div className="flex-col items-start justify-center text-white hidden sm:flex">
                    <h2 className="font-medium text-base">Welcome, Muhammed Nabeel </h2>
                    <p className="font-normal text-xs">muhammednabeelc05@gmail.com</p>
                </div>
            </div>
        </>
    )
}
