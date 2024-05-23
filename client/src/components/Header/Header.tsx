import HeaderLinks from "./HeaderLinks";
import UserProfile from "./UserProfile";

export default function Header({
    openSidebar
}: {
    openSidebar: () => void;
}) {
    return (
        <>

            <div className="w-full flex items-center justify-between px-10 lg:px-20 py-4">
                <UserProfile openSidebar={openSidebar}  />
                <HeaderLinks />
            </div>
            <div className="w-ful flex items-center justify-center">
                <hr className="w-10/12 opacity-55" />
            </div>
        </>
    )
}
