import { FaMessage } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

export default function HeaderLinks() {
    return (
        <>
            <div className="flex items-center justify-center gap-2">
                <div className="flex items-center justify-center bg-slate-950 rounded-full p-2">
                    <FaSearch size={"16"} color={"#fff"} />
                </div>
                <div className="flex items-center justify-center bg-slate-950 rounded-full p-2">
                    <FaMessage size={"16"} color={"#fff"} />
                </div>
                <div className="flex items-center justify-center bg-slate-950 rounded-full p-2">
                    <FaBell size={"16"} color={"#fff"} />
                </div>
            </div>
        </>
    )
}
