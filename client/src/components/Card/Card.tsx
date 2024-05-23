import { TbMessages } from "react-icons/tb";

export default function Card({
    title,
    description
}: {
    title: string,
    description: string
}) {
    return (
        <>
            <div className="relative backdrop-blur-sm bg-gradient-to-r from-[rgba(255,255,255,0.5)] from-10% to-[rgba(255,255,255,0.1)] w-80 h-36 rounded-lg text-white">
                <div className="w-full flex items-center justify-end absolute -left-4 top-4">
                    <TbMessages color={"#fff"} size={"40"} />
                </div>
                <div className="w-full flex flex-col items-start justify-center pt-12 px-4">
                    <h2 className="font-semibold text-lg">{title}</h2>
                    <p className="font-normal text-sm line-clamp-2">{description}</p>
                </div>
            </div>
        </>
    )
}
